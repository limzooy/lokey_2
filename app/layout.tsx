import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LoKey - 요즘 20대의 조용한 취향 코드',
  description: '20-30대가 조용히 소비하는 패션·빈티지·저도수 라이프스타일 트렌드를 큐레이션하는 미디어 플랫폼',
  keywords: ['패션', '빈티지', '저도수 술', '라이프스타일', '트렌드', 'quiet luxury', 'lokey'],
  openGraph: {
    title: 'LoKey - 요즘 20대의 조용한 취향 코드',
    description: '로우키하지만 확실한, 우리 세대의 라이프스타일',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5695434271475936"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
