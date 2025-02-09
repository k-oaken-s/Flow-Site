import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flow - シンプルな動画管理アプリ',
  description: 'WindowsとMac対応の無料動画管理アプリケーション。直感的な操作で動画ファイルを簡単に整理・管理できます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
