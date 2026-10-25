
import pandas as pd

# Change this to your original board-game CSV filename.
INPUT_FILE = "board_games_2023.csv"
OUTPUT_FILE = "chart11_mechanics_rating.csv"

# Use latin-1 to handle encoding issues in the source CSV.
df = pd.read_csv(INPUT_FILE, encoding="latin-1", low_memory=False)

# Remove spaces from column names.
df.columns = df.columns.str.strip()

# Keep the fields needed for the chart.
columns = [
    "game_id",
    "name",
    "year_published",
    "mechanic",
    "average_rating",
    "users_rated"
]

df = df[columns].copy()

# Convert numeric columns.
for col in [
    "year_published",
    "average_rating",
    "users_rated"
]:
    df[col] = pd.to_numeric(df[col], errors="coerce")

# Count mechanics separated by commas.
def count_mechanics(value):
    if pd.isna(value):
        return 0

    mechanics = [
        item.strip()
        for item in str(value).split(",")
        if item.strip()
    ]

    return len(mechanics)

df["mechanic_count"] = df["mechanic"].apply(count_mechanics)

# Remove invalid records.
df = df[
    (df["mechanic_count"] > 0) &
    (df["average_rating"].between(0, 10)) &
    (df["users_rated"] > 0) &
    (df["year_published"] > 0)
].copy()

# Assign publication eras.
def get_era(year):
    if year < 1980:
        return "Before 1980"
    elif year < 2000:
        return "1980–1999"
    elif year < 2010:
        return "2000–2009"
    elif year < 2020:
        return "2010–2019"
    else:
        return "2020 Onwards"

df["era"] = df["year_published"].apply(get_era)

df = df[
    [
        "game_id",
        "name",
        "year_published",
        "era",
        "mechanic_count",
        "average_rating",
        "users_rated"
    ]
]

df.to_csv(OUTPUT_FILE, index=False, encoding="utf-8-sig")

print(f"Created {OUTPUT_FILE}")
print(f"Total games: {len(df):,}")
print(df.head(10).to_string(index=False))
