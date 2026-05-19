with open(r"c:\Users\anelk\Desktop\Sito Web Mizu Sushi\scratch\user_menu.txt", 'r', encoding='utf-8') as f:
    raw_lines = [line.strip() for line in f if line.strip()]

def show_around(idx, label):
    print(f"\n--- Around {label} (line {idx}) ---")
    for i in range(max(0, idx - 4), min(len(raw_lines), idx + 5)):
        print(f"{i}: {raw_lines[i]}")

# 6 is at line 485
show_around(485, "Num 6")

# 67 is at line 698
show_around(698, "Num 67")

# 109 is at line 874
show_around(874, "Num 109")

# 165 is at line 189
show_around(189, "Num 165")

# 166 is at line 170
show_around(170, "Num 166")
