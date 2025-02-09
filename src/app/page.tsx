'use client'
import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              動画管理を、もっとシンプルに
            </h1>
            <p className="text-xl mb-8">
              WindowsとMac両対応。直感的な操作で動画ファイルを簡単管理
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Windows版をダウンロード
              </button>
              <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Mac版をダウンロード
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 機能紹介セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              emoji="🎥"
              title="簡単な動画管理"
              description="ドラッグ＆ドロップで簡単に動画を整理できます"
            />
            <FeatureCard
              emoji="🔍"
              title="高速検索"
              description="タグやタイトルで素早く動画を見つけられます"
            />
            <FeatureCard
              emoji="🔄"
              title="クロスプラットフォーム"
              description="WindowsとMacの両方で利用可能です"
            />
          </div>
        </div>
      </section>

      {/* 価格セクション */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">価格プラン</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-4">無料版</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                基本的な動画管理機能
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                最大100件までの動画管理
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                基本的な検索機能
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              ダウンロードする
            </button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 動画管理アプリ. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

// 機能カードコンポーネント
function FeatureCard({ emoji, title, description }: { emoji: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
