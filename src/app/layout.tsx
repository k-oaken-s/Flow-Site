import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ビデオ管理アプリ - 簡単な動画整理を実現',
  description: 'WindowsとMac対応の使いやすい動画管理アプリケーション。効率的な動画ファイルの整理・管理を実現します。',
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
