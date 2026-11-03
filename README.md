# Furniture Brand Site（家具・インテリアブランド サイト） [2周目]

CODEJUMP「家具・インテリアブランド」課題の2周目の制作リポジトリです。

## 概要

南青山の家具・インテリアの企画・販売会社によるマルチページサイトのコーディングを行っています。グリッドレイアウトを用いた製品一覧、ハンバーガーメニュー、複数ページ（トップ、Products、詳細、About、Company）のレイアウト設計、Google Mapのグレースケール化などを実装します。

## コーディング仕様

- **コンテンツ幅**: 
  - 全体最大幅: 1360px（左右パディング: 40px）
  - About / Companyページ: 600px
  - 商品詳細ページ: 800px
- **レイアウト・ナビゲーション**: 
  - グリッドレイアウト（PC: 4列 / SP: 2列）
  - ハンバーガーメニューの実装
  - CONTACTリンク（メール起動）
- **各ページの特徴**: 
  - **Products**: 一覧下にページネーションを設置
  - **Product詳細**: 画像とテキストの横並びレイアウト、「Back To Products」リンク
  - **Company**: Google Mapを埋め込み、CSSでグレースケール化
- **レスポンシブ**: 
  - ブレークポイント: 900px

## 使用技術

- HTML5
- SCSS / CSS3
- BEM (CSS設計)
- Live Sass Compiler
- Git / GitHub

## Demo

https://satoru-tanaka-1977.github.io/cj-intermediate-store2-v2/

## 制作状況

制作中（2026.11.3〜）