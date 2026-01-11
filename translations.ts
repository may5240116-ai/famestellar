
import { Translation } from './types';

export const translations: Record<'KO' | 'EN', Translation> = {
  KO: {
    nav: {
      home: "홈",
      vision: "비전",
      solution: "해결방안",
      system: "시스템",
      business: "사업수익"
    },
    hero: {
      subtitle: "보편적 내재 가치 생성과 사용자 수용성을 확장한",
      title: "Fame Stellar (별의 명성)",
      description: "탈중앙화 자율조직(DAO), 금융(DeFi), NFT를 실생활에 구현하는 차세대 가치 플랫폼",
      cta: "둘러보기"
    },
    intro: {
      header: "사업 소개",
      p1: "암호화폐의 실험과 도전은 과거의 고착화된 관점과 제도에 새로운 방법의 전환을 가져옵니다.",
      p2: "Fame Stellar는 실생활에서 사용 가능한 내재 가치의 변동성이 안정적인 암호화폐와 NFT를 통해 플랫폼을 구현합니다.",
      p3: "본질적 목적은 사용자들의 동의와 사회적 합의가 가능한 내재가치 생성 및 가치확장을 위한 시스템 구현입니다.",
      p4: "더 나아가 양극화, 노인빈곤, 부족한 일자리 등 사회문제 해결의 실마리를 제공하고자 합니다."
    },
    challenges: {
      title: "도전 과제",
      items: [
        "암호화폐의 실효성 및 조건 탐색",
        "일방적 시스템의 지속 가능성 한계 극복",
        "변동성이 큰 가치 자산의 안정화"
      ]
    },
    solution: {
      title: "해결 방안",
      subtitle: "매력 : 좋은 영향력",
      description: "정진과 결실에 대한 의미와 가치를 바탕으로 문명의 발전을 도모합니다.",
      processTitle: "가치 생성 기본 과정",
      processDesc: "사용자가 기부 1회 시, 수수료 면제 NFT를 선물함과 동시에 랭킹 전술 게임 참여 기회를 제공합니다."
    },
    business: {
      title: "비즈니스 모델 & 수익 예측",
      predictTitle: "사업수익 예측",
      predictDesc: "시스템 전체 보상을 통한 핵심 생성가치를 측정하고 5일/30일 NFT의 가치 생성을 분석합니다.",
      cycleTitle: "한 사이클 (One Cycle)",
      cycleDesc: "코인과 NFT가 1차로 발행되고 시스템에 반환되어 돌아오는 과정을 하나의 주기로 정의합니다."
    },
    footer: {
      rights: "© 2024 famestellar.com. All rights reserved.",
      author: "작성자: 윤성길 | 검수자: 김문수"
    }
  },
  EN: {
    nav: {
      home: "Home",
      vision: "Vision",
      solution: "Solution",
      system: "System",
      business: "Profit"
    },
    hero: {
      subtitle: "Universal Intrinsic Value & User Acceptance",
      title: "Fame Stellar",
      description: "Next-gen value platform implementing DAOs, DeFi, and NFTs in real life.",
      cta: "Explore Now"
    },
    intro: {
      header: "Business Introduction",
      p1: "The experiment of cryptocurrency brings a paradigm shift from rigid traditional systems.",
      p2: "Fame Stellar implements a platform using stable intrinsic value coins and variable NFTs usable in daily life.",
      p3: "Our core mission is to create intrinsic value through user consensus and social agreement.",
      p4: "We aim to address social issues like polarization, elderly poverty, and job shortages."
    },
    challenges: {
      title: "Core Challenges",
      items: [
        "Exploring effectiveness and conditions of crypto",
        "Overcoming sustainability limits of one-sided systems",
        "Stabilizing highly volatile value assets"
      ]
    },
    solution: {
      title: "Our Solution",
      subtitle: "Charisma : Positive Influence",
      description: "Driving civilization forward based on the value of diligence and results.",
      processTitle: "Value Creation Process",
      processDesc: "Upon one donation, users receive a fee-waived NFT and access to strategic ranking games."
    },
    business: {
      title: "Business Model & Forecasting",
      predictTitle: "Profit Forecasting",
      predictDesc: "Measuring core value creation through system rewards and analyzing 5-day/30-day NFT value cycles.",
      cycleTitle: "One Cycle",
      cycleDesc: "Defined as the process from initial issuance of coins/NFTs to their return to the system."
    },
    footer: {
      rights: "© 2024 famestellar.com. All rights reserved.",
      author: "Author: Yoon Sung-gil | Reviewer: Kim Moon-soo"
    }
  }
};
