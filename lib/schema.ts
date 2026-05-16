import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

// 소인수분해 기록을 저장하는 예시 테이블
export const factorizationLogs = pgTable("factorization_logs", {
  id: serial("id").primaryKey(),
  inputNumber: text("input_number").notNull(),
  result: text("result").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 여기에 새로운 테이블을 추가하세요
// export const users = pgTable("users", { ... });
