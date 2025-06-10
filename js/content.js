// Content data for the portfolio website
const content = {
    // Text content for multilingual support
    text: {
        ja: {
            "hero-title": "西原 聡吾",
            "hero-subtitle": "東京大学工学部機械情報工学科 竹内研究室",
            "view-projects": "プロジェクトを見る",
            "about-title": "About",
            "about-description": "東京大学工学部機械情報工学科で学んでいる学生です。C/C++とPythonを得意とし、ソフトウェア開発を通じてアイデアを素早く形にすることに情熱を持っています。将来は、人々の日常生活を支援し、改善する重要なサービスの開発に貢献したいと考えています。",
            "skills-title": "スキル",
            "projects-title": "Projects",
            "experience-title": "Experience",
            "contact-title": "Contact",
            "location-label": "所在地:",
            "location": "東京, 日本",
            "about": "About",
            "projects": "Projects",
            "experience": "Experience",
            "contact": "Contact"
        },
        en: {
            "hero-title": "Sogo Nishihara",
            "hero-subtitle": "Undergraduate student at the University of Tokyo",
            "view-projects": "View Projects",
            "about-title": "About",
            "about-description": "A highly motivated Mechanical and Information Engineering student at the University of Tokyo, with a strong passion for problem-solving and creation. Skilled in software development, especially in C/C++ and Python, appreciating its ability to bring ideas to life quickly. Eager to contribute to the development of essential services that support and improve people's daily lives.",
            "skills-title": "Skills",
            "projects-title": "Projects",
            "experience-title": "Experience",
            "contact-title": "Contact",
            "location-label": "Location:",
            "location": "Tokyo, Japan",
            "about": "About",
            "projects": "Projects",
            "experience": "Experience",
            "contact": "Contact"
        }
    },
    
    // Skills data
    skills: [
        { name: "C/C++", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "PHP", level: "Intermediate" },
        { name: "Swift", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Machine Learning", level: "Intermediate" },
        { name: "AR/VR", level: "Intermediate" },
        { name: "Laravel", level: "Intermediate" }
    ],
    
    // Projects data
    projects: [
        {
            id: "location-sns",
            title: {
                ja: "位置情報ベースのSNS & ARレンズ",
                en: "Location-based SNS & AR Lens"
            },
            description: {
                ja: "位置情報に紐づいた投稿をARで表示できるスマートフォンアプリケーション",
                en: "A smartphone application that displays location-based posts in AR"
            },
            detailedDescription: {
                ja: "Laravel で認証や投稿管理を行う API を開発して、Swift でスマホアプリを制作しました。アプリでは、位置情報に紐づいた投稿を AR で見ることができます。リアルタイムで投稿を地図上にマッピングし、ARカメラを通じて実世界に投稿内容を表示する革新的なソーシャルメディア体験を提供します。",
                en: "Developed an API for authentication and post management using Laravel, and created a smartphone app using Swift. The app allows users to view location-based posts in AR. It provides an innovative social media experience by mapping posts in real-time on a map and displaying post content in the real world through AR camera."
            },
            technologies: ["PHP", "Laravel", "Swift", "AR", "API"],
            period: "2020年5月〜9月",
            github: "https://github.com/medamawa/locomiAPI",
            image: "📍" // Emoji as placeholder, can be replaced with actual image URL
        },
        {
            id: "closed-community",
            title: {
                ja: "学生のクローズドコミュニティサイト",
                en: "Student Closed Community Site"
            },
            description: {
                ja: "役職管理機能を持つ学生向けコミュニティプラットフォーム",
                en: "A community platform for students with role management features"
            },
            detailedDescription: {
                ja: "個々のアカウントにクラブや委員会などの役職を持たせて、管理できるように Laravel 標準の認証をカスタマイズしました。階層的な権限管理システムを実装し、組織内での役割に応じたアクセス制御を実現しています。",
                en: "Customized Laravel's standard authentication to allow individual accounts to have and manage roles such as clubs and committees. Implemented a hierarchical permission management system that provides access control based on roles within the organization."
            },
            technologies: ["PHP", "Laravel", "MySQL", "Authentication"],
            period: "2020年5月〜7月",
            github: "https://github.com/medamawa/nada-sc-",
            image: "👥"
        },
        {
            id: "vision-assistant",
            title: {
                ja: "視覚障害者のための補助アプリ",
                en: "Vision Assistant App for the Visually Impaired"
            },
            description: {
                ja: "リアルタイム画像認識技術を用いた視覚障害者向け補助アプリケーション",
                en: "An assistive application for visually impaired users using real-time image recognition"
            },
            detailedDescription: {
                ja: "リアルタイム画像認識技術を用いて、盲導犬の代替となるようなアプリを制作しました。カメラから取得した映像をリアルタイムで解析し、障害物の検出や経路案内を音声で提供します。機械学習モデルを活用して、歩行者、車両、信号機などを高精度で認識し、安全な移動をサポートします。",
                en: "Created an app that serves as an alternative to guide dogs using real-time image recognition technology. It analyzes video footage from the camera in real-time and provides obstacle detection and route guidance through audio. Using machine learning models, it accurately recognizes pedestrians, vehicles, traffic lights, and supports safe movement."
            },
            technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
            period: "2024年2月〜3月",
            github: "https://github.com/medamawa/navi-ken",
            image: "👁️"
        },
        {
            id: "hmd-interface",
            title: {
                ja: "HMD時代に向けた新しい入力インタフェース",
                en: "New Input Interface for HMD Era"
            },
            description: {
                ja: "VRゴーグル装着時の新しい文字入力方法の提案と実装",
                en: "Proposal and implementation of new text input method for VR headsets"
            },
            detailedDescription: {
                ja: "VR ゴーグル等の HMD 装着時の手元が見えない状況を想定した、キーボード入力に変わる新たな入力インタフェースを提案、実装しました。指の動きを追跡して文字入力を行う革新的な手法で、ユーザーが手元を見ずに直感的にテキスト入力できるシステムを開発しました。60名参加のプログラミングコンテストでトップ3入賞を果たしました。",
                en: "Proposed and implemented a new input interface to replace keyboard input when wearing HMDs like VR goggles, assuming situations where hands are not visible. Developed an innovative system that allows intuitive text input without users looking at their hands by tracking finger movements. Achieved a Top 3 finish in a programming contest with 60 participants."
            },
            technologies: ["Python", "Computer Vision", "Hand Tracking", "VR"],
            period: "2024年11月〜2025年1月",
            github: "https://github.com/medamawa/yubi-key",
            image: "🥽",
            award: {
                ja: "プログラミングコンテスト トップ3入賞",
                en: "Top 3 in Programming Contest"
            }
        }
    ],
    
    // Experience data
    experience: [
        {
            date: "2025 - 2026",
            title: {
                ja: "ノースイースタン大学 工学部（交換留学）",
                en: "Northeastern University, College of Engineering (Exchange Student)"
            },
            description: {
                ja: "アメリカでのエンジニアリング教育を通じて、国際的な視点を養い、将来のキャリアに活かす予定",
                en: "Gaining international perspective through American engineering education for future career development"
            }
        },
        {
            date: "2023 - Present",
            title: {
                ja: "42 Tokyo",
                en: "42 Tokyo"
            },
            description: {
                ja: "プログラミング能力だけでなく、問題解決能力、協働力も鍛えることを目的としたエンジニア養成機関で学習中。C/C++を中心としたプログラミングスキルを習得",
                en: "Learning at an engineer training institution focused on developing not only programming skills but also problem-solving and collaboration abilities. Acquiring low-level programming skills centered on C/C++"
            }
        },
        {
            date: "2022 - Present",
            title: {
                ja: "東京大学 工学部 機械情報工学科",
                en: "University of Tokyo, Faculty of Engineering"
            },
            description: {
                ja: "機械情報工学を専攻し、ソフトウェア開発とハードウェアの両面から技術を学習",
                en: "Majoring in Mechanical Information Engineering, studying technology from both software development and hardware perspectives"
            }
        },
        {
            date: "2022 - Present",
            title: {
                ja: "東大アメフトチーム VIKINGS 主将",
                en: "Captain, American Football Club, University of Tokyo"
            },
            description: {
                ja: "リーグ優勝を目標に掲げ、チーム全員が目標を意識して練習に取り組めるようチームマネジメントを実施",
                en: "Leading the team towards league championship, implementing team management to ensure all members focus on the goal during practice"
            }
        },
        {
            date: "2022 - Present",
            title: {
                ja: "ニッポン放送 報道アシスタント",
                en: "News Assistant, Nippon Broadcasting System"
            },
            description: {
                ja: "報道部の業務が円滑に進むよう補助業務を担当",
                en: "Supporting news department operations to ensure smooth workflow"
            }
        },
        {
            date: "2016 - 2022",
            title: {
                ja: "灘中学・高等学校",
                en: "Nada Junior and Senior High School"
            },
            description: {
                ja: "🏫",
                en: "Built fundamental academic skills"
            }
        }
    ]
};
