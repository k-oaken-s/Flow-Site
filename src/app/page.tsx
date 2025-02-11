'use client'
import React, { useState } from 'react'
import Image from 'next/image'

// basePath用のユーティリティ関数を追加
const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/Flow-Site' : '';
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const downloads = {
    windows: 'https://github.com/k-oaken-s/flow/releases',
    mac: 'https://github.com/k-oaken-s/flow/releases'
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <main className="flex-grow">
        {/* ヒーローセクション */}
        <section className="relative overflow-hidden py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-6 mb-8">
                <Image
                  src={`${getBasePath()}/flow.png`}
                  alt="Flow アプリアイコン"
                  width={96}
                  height={96}
                  className="rounded-2xl shadow-lg"
                  priority
                />
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                  Flow
                </h1>
              </div>
              <p className="text-2xl mb-4 text-blue-100">
                タイムラインのサムネイルで動画管理するデスクトップアプリ
              </p>
              <p className="text-lg mb-12 text-blue-100/90">
                クロスプラットフォームに対応しており、無料で利用できます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={downloads.windows}
                  className="group bg-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Windows版をダウンロード
                  </span>
                </a>
                <a
                  href={downloads.mac}
                  className="group bg-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Mac版をダウンロード
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* アプリ概要セクション */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-600 leading-relaxed">
                Flowは、動画ファイルをタイムラインのサムネイル表示で視覚的に管理できるデスクトップアプリケーションです。
                タグ管理、お気に入り機能を備え、再生回数やファイルサイズなどでのソート機能で大量の動画ファイルを効率的に整理・管理することができます。
              </p>
            </div>
          </div>
        </section>

        {/* プレビューセクション */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              アプリケーションプレビュー
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* メインプレビュー */}
              <div className="md:col-span-2">
                <div className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.06)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300">
                  <Image
                    src={`${getBasePath()}/images/preview1.png`}
                    alt="Flow - タイムライン表示"
                    width={1200}
                    height={675}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              {/* サブプレビュー */}
              {[2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.06)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer"
                  onClick={() => handleImageClick(i)}
                >
                  <Image
                    src={`${getBasePath()}/images/preview${i}.png`}
                    alt={`Flow - プレビュー ${i}`}
                    width={600}
                    height={338}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* モーダル */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-7xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl"
              >
                ×
              </button>
              <Image
                src={`${getBasePath()}/images/preview${selectedImage}.png`}
                alt={`Flow - プレビュー ${selectedImage}`}
                width={1200}
                height={675}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}

        {/* 機能紹介セクション */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              主な機能
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-white shadow-[0_0_50px_rgba(0,0,0,0.06)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  表示・管理機能
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center text-sm">✓</span>
                    タイムライン形式でのサムネイル表示
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center text-sm">✓</span>
                    ファイル＆フォルダでの動画インポート
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center text-sm">✓</span>
                    タグによる動画管理
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-white shadow-[0_0_50px_rgba(0,0,0,0.06)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  便利な機能
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center text-sm">✓</span>
                    お気に入り登録と再生回数トラッキング
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center text-sm">✓</span>
                    ファイル名による高速検索
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center text-sm">✓</span>
                    再生回数やファイルサイズでのソート
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* リリース情報セクション */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              リリース情報
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-2xl bg-white shadow-[0_0_50px_rgba(0,0,0,0.06)]">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">バージョン 0.1.0-alpha.1</h3>
                    <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
                      2025年2月10日
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">初回リリース</p>
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">動作環境</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                      Windows 10/11 (64bit)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                      macOS 12.0以降
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Flow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
