"""
万葉仮名変換ツール
主程序 - 包含转换器、GUI和主函数
"""

import tkinter as tk
from tkinter import ttk, scrolledtext, messagebox, filedialog
import pyperclip
from mappings import HIRAGANA_TO_MANYOGANA, KATAKANA_TO_HIRAGANA, YOON_MAPPING

class ManyoganaConverter:
    """万叶假名转换器核心类"""
    
    def __init__(self):
        self.hira_to_manyo = HIRAGANA_TO_MANYOGANA
        self.kata_to_hira = KATAKANA_TO_HIRAGANA
        self.yoon_mapping = YOON_MAPPING
        self.yoon_base = set(self.yoon_mapping.keys())
    
    def is_hiragana(self, char: str) -> bool:
        return '\u3040' <= char <= '\u309F'
    
    def is_katakana(self, char: str) -> bool:
        return '\u30A0' <= char <= '\u30FF'
    
    def is_kana(self, char: str) -> bool:
        return self.is_hiragana(char) or self.is_katakana(char)
    
    def is_kanji(self, char: str) -> bool:
        return '\u4E00' <= char <= '\u9FFF' or '\u3400' <= char <= '\u4DBF'
    
    def convert_to_manyogana(self, text: str) -> str:
        """将日语文本转换为万叶假名"""
        result = []
        i = 0
        length = len(text)
        
        while i < length:
            char = text[i]
            
            # 汉字保留原样
            if self.is_kanji(char):
                result.append(char)
                i += 1
                continue
            
            # 片假名转平假名
            if self.is_katakana(char):
                hira_char = self.kata_to_hira.get(char, char)
            elif self.is_hiragana(char):
                hira_char = char
            else:
                # 非假名非汉字（标点、空格等）直接保留
                result.append(char)
                i += 1
                continue
            
            # 检查拗音
            if i + 1 < length:
                next_char = text[i + 1]
                if (self.is_hiragana(hira_char) and 
                    next_char in ['ゃ', 'ゅ', 'ょ'] and
                    hira_char in self.yoon_base):
                    
                    yoon = hira_char + next_char
                    if yoon in self.yoon_mapping:
                        result.append(self.yoon_mapping[yoon])
                        i += 2
                        continue
            
            # 普通假名转换
            if hira_char in self.hira_to_manyo:
                result.append(self.hira_to_manyo[hira_char])
            else:
                result.append(char)
            
            i += 1
        
        return ''.join(result)

class ManyoganaApp:
    """GUI应用程序"""
    
    def __init__(self, root):
        self.root = root
        self.root.title("万葉仮名変換ツール")
        self.root.geometry("700x600")
        
        # 创建转换器
        self.converter = ManyoganaConverter()
        
        # 设置界面
        self.setup_ui()
        
        # 设置窗口居中
        self.center_window()
    
    def center_window(self):
        """窗口居中显示"""
        self.root.update_idletasks()
        width = self.root.winfo_width()
        height = self.root.winfo_height()
        x = (self.root.winfo_screenwidth() // 2) - (width // 2)
        y = (self.root.winfo_screenheight() // 2) - (height // 2)
        self.root.geometry(f'{width}x{height}+{x}+{y}')
    
    def setup_ui(self):
        """创建用户界面"""
        
        # 标题
        title_label = tk.Label(
            self.root, 
            text="万葉仮名変換ツール", 
            font=("MS Gothic", 18, "bold"),
            fg="#2c3e50"
        )
        title_label.pack(pady=10)
        
        # 输入区域
        input_frame = tk.LabelFrame(
            self.root, 
            text="入力テキスト", 
            font=("MS Gothic", 11)
        )
        input_frame.pack(fill="both", padx=20, pady=5)
        
        # 输入文本框
        self.input_text = scrolledtext.ScrolledText(
            input_frame,
            font=("MS Gothic", 12),
            height=6,
            wrap="word"
        )
        self.input_text.pack(fill="both", expand=True, padx=10, pady=10)
        
        # 输入按钮
        input_buttons = tk.Frame(input_frame)
        input_buttons.pack(fill="x", padx=10, pady=(0, 10))
        
        tk.Button(
            input_buttons,
            text="例文を挿入",
            command=self.insert_example,
            font=("MS Gothic", 9)
        ).pack(side="left", padx=2)
        
        tk.Button(
            input_buttons,
            text="クリア",
            command=self.clear_input,
            font=("MS Gothic", 9)
        ).pack(side="left", padx=2)
        
        # 转换按钮
        convert_button = tk.Button(
            self.root,
            text="変換開始",
            command=self.convert_text,
            font=("MS Gothic", 12, "bold"),
            bg="#3498db",
            fg="white",
            padx=20,
            pady=5
        )
        convert_button.pack(pady=10)
        
        # 输出区域
        output_frame = tk.LabelFrame(
            self.root, 
            text="変換結果", 
            font=("MS Gothic", 11)
        )
        output_frame.pack(fill="both", expand=True, padx=20, pady=5)
        
        # 输出文本框
        self.output_text = scrolledtext.ScrolledText(
            output_frame,
            font=("MS Gothic", 12),
            height=6,
            wrap="word",
            state="disabled"
        )
        self.output_text.pack(fill="both", expand=True, padx=10, pady=10)
        
        # 输出按钮
        output_buttons = tk.Frame(output_frame)
        output_buttons.pack(fill="x", padx=10, pady=(0, 10))
        
        tk.Button(
            output_buttons,
            text="結果をコピー",
            command=self.copy_result,
            font=("MS Gothic", 9),
            bg="#27ae60",
            fg="white"
        ).pack(side="left", padx=2)
        
        tk.Button(
            output_buttons,
            text="ファイルに保存",
            command=self.save_result,
            font=("MS Gothic", 9),
            bg="#9b59b6",
            fg="white"
        ).pack(side="left", padx=2)
        
        # 状态栏
        self.status_label = tk.Label(
            self.root,
            text="準備完了",
            bd=1,
            relief=tk.SUNKEN,
            anchor=tk.W
        )
        self.status_label.pack(side=tk.BOTTOM, fill=tk.X)
        
        # 添加快捷键
        self.root.bind('<Control-Return>', lambda e: self.convert_text())
    
    def insert_example(self):
        """插入示例文本"""
        examples = [
            "こんにちは、元気ですか。\n私は東南大学の学生です。",
            "日本語の勉強はとても楽しいです。\n万葉仮名の歴史に興味があります。",
            "今日は良い天気ですね。\n一緒に勉強しましょう。"
        ]
        import random
        self.input_text.delete("1.0", tk.END)
        self.input_text.insert("1.0", random.choice(examples))
        self.status_label.config(text="例文を挿入しました")
    
    def clear_input(self):
        """清空输入"""
        self.input_text.delete("1.0", tk.END)
        self.status_label.config(text="入力欄をクリアしました")
    
    def convert_text(self):
        """转换文本"""
        text = self.input_text.get("1.0", "end-1c")
        
        if not text.strip():
            messagebox.showwarning("警告", "変換するテキストを入力してください。")
            return
        
        try:
            result = self.converter.convert_to_manyogana(text)
            
            self.output_text.config(state="normal")
            self.output_text.delete("1.0", tk.END)
            self.output_text.insert("1.0", result)
            self.output_text.config(state="disabled")
            
            self.status_label.config(text=f"変換完了: {len(text)}文字 → {len(result)}文字")
            
        except Exception as e:
            messagebox.showerror("エラー", f"変換中にエラーが発生しました:\n{str(e)}")
            self.status_label.config(text="変換エラー")
    
    def copy_result(self):
        """复制结果"""
        result = self.output_text.get("1.0", "end-1c")
        if result.strip():
            try:
                pyperclip.copy(result)
                self.status_label.config(text="結果をクリップボードにコピーしました")
            except:
                messagebox.showwarning("警告", "クリップボードへのコピーに失敗しました。")
        else:
            messagebox.showwarning("警告", "コピーする結果がありません。")
    
    def save_result(self):
        """保存结果到文件"""
        from tkinter import filedialog
        
        result = self.output_text.get("1.0", "end-1c")
        if not result.strip():
            messagebox.showwarning("警告", "保存する結果がありません。")
            return
        
        file_path = filedialog.asksaveasfilename(
            defaultextension=".txt",
            filetypes=[
                ("Text files", "*.txt"),
                ("All files", "*.*")
            ],
            title="結果を保存"
        )
        
        if file_path:
            try:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write("=== 万葉仮名変換結果 ===\n\n")
                    f.write("元のテキスト:\n")
                    f.write(self.input_text.get("1.0", "end-1c"))
                    f.write("\n\n変換結果:\n")
                    f.write(result)
                    f.write("\n\n---\nGenerated by Manyogana Translator")
                
                self.status_label.config(text=f"結果を保存しました: {file_path}")
                messagebox.showinfo("成功", f"ファイルを保存しました:\n{file_path}")
                
            except Exception as e:
                messagebox.showerror("エラー", f"ファイルの保存に失敗しました:\n{str(e)}")

def main():
    """主函数"""
    root = tk.Tk()
    app = ManyoganaApp(root)
    root.mainloop()

if __name__ == "__main__":
    main()