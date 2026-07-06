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
      fillOpacity={0.12}
      glowColor="30 80 55"
      glowIntensity={1.8}
      glowRadius={50}
      colors={['#fb923c', '#f97316', '#fdba74']}
      className={`text-card-foreground ${className}`}
    >
      {children}
    </BorderGlow>
  )
}