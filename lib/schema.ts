import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

// 소인수분해 기록을 저장하는 예시 테이블
export const factorizationLogs = pgTable("factorization_logs", {
  id: serial("id").primaryKey(),
  inputNumber: text("input_number").notNull(),
  result: text("result").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 모든 학습 프로그램의 점수나 기록을 공통으로 저장할 수 있는 통합 테이블
export const gameScores = pgTable("game_scores", {
  id: serial("id").primaryKey(),
  playerName: text("player_name").notNull().default("익명"),
  gameId: text("game_id").notNull(), // 예: 'coordinate-omok', 'equation-escape'
  score: integer("score").default(0),
  level: integer("level").default(1),
  playTimeSeconds: integer("play_time_seconds").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 여기에 새로운 테이블을 추가하세요
// export const users = pgTable("users", { ... });
