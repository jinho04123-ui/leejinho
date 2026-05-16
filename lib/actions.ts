"use server";

import { db } from "./db";
import { gameScores } from "./schema";
import { desc, eq } from "drizzle-orm";

// 1. 게임 기록 저장하기
export async function saveGameScore(data: {
  playerName: string;
  gameId: string;
  score?: number;
  level?: number;
  playTimeSeconds?: number;
}) {
  try {
    const result = await db.insert(gameScores).values({
      playerName: data.playerName,
      gameId: data.gameId,
      score: data.score ?? 0,
      level: data.level ?? 1,
      playTimeSeconds: data.playTimeSeconds ?? 0,
    }).returning();
    
    return { success: true, data: result[0] };
  } catch (error) {
    console.error("Failed to save game score:", error);
    return { success: false, error: "Failed to save game score" };
  }
}

// 2. 특정 게임의 랭킹(최고 점수) 불러오기
export async function getGameRanking(gameId: string, limit: number = 10) {
  try {
    const scores = await db.select()
      .from(gameScores)
      .where(eq(gameScores.gameId, gameId))
      .orderBy(desc(gameScores.score), desc(gameScores.level)) // 점수가 높고, 레벨이 높은 순
      .limit(limit);
      
    return { success: true, data: scores };
  } catch (error) {
    console.error(`Failed to fetch ranking for ${gameId}:`, error);
    return { success: false, error: "Failed to fetch ranking" };
  }
}
