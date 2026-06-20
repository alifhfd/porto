"use client"

import type React from "react"
import BorderGlow from "@/components/border-glow"

export function GlowCard({
  children,
  className = "",
  borderRadius = 24,
  animated = true,
}: {
  children?: React.ReactNode
  className?: string
  borderRadius?: number
  animated?: boolean
}) {
  return (
    <BorderGlow
      animated={animated}
      backgroundColor="var(--card)"
      borderRadius={borderRadius}
      coneSpread={98}
      edgeSensitivity={77}
      fillOpacity={0.16}
      glowColor="38 75 78"
      glowIntensity={2}
      glowRadius={57}
      colors={["#c084fc", "#f472b6", "#38bdf8"]}
      className={`text-card-foreground ${className}`}
    >
      {children}
    </BorderGlow>
  )
}
