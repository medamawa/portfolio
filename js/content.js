// Content data for the portfolio website
const content = {
    // Text content for multilingual support
    text: {
        ja: {
            "hero-title": "西原 聡吾",
            "hero-subtitle": "東京大学工学部機械情報工学科 竹内研究室",
            "view-projects": "プロジェクトを見る",
            "about-title": "About",
            "about-description": "東京大学工学部機械情報工学科の学生です。コンピュータサイエンスを得意とし、ソフトウェア開発を通じてアイデアを形にすることに情熱を持っています。将来は、人々の生活の基盤となるサービスの開発に貢献したいと考えています。",
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
        {
            ja: "エンジニアリング",
            en: "Engineering"
        },
        {
            ja: "コンピュータサイエンス",
            en: "Computer science"
        },
        {
            ja: "デザイン",
            en: "Design"
        },
        {
            ja: "プログラミング",
            en: "Programming"
        },
        {
            ja: "協調性",
            en: "Communication"
        },
        {
            ja: "リーダーシップ",
            en: "Leadership"
        },
        {
            ja: "簿記2級",
            en: "Grade 2 Bookkeeping"
        },
        {
            ja: "第2種電気工事士",
            en: "Class 2 Electrician"
        },
        {
            ja: "高い学習能力",
            en: "Fast learner"
        },
        {
            ja: "英語",
            en: "English/Japanese"
        },
        {
            ja: "ユーモラス",
            en: "Humorous"
        }
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
            // 新しいrichContentフィールド
            richContent: {
                ja: `
                
                `,
                en: `
                
                `
            },
            // 従来のdetailedDescriptionも保持（フォールバック用）
            detailedDescription: {
                ja: "Laravel で認証や投稿管理を行う API を開発して、Swift でスマホアプリを制作しました。アプリでは、位置情報に紐づいた投稿を AR で見ることができます。",
                en: "Developed an API for authentication and post management using Laravel, and created a smartphone app using Swift. The app allows users to view location-based posts in AR."
            },
            technologies: ["PHP", "Laravel", "Swift", "AR", "API"],
            period: "2020年5月〜9月",
            github: "https://github.com/medamawa/locomiAPI",
            image: "📍"
        },
        {
            id: "yubi-key",
            title: {
                ja: "HMD時代に向けた新しい入力インタフェース",
                en: "New Input Interface for HMD Era"
            },
            description: {
                ja: "新しい入力方法の提案と実装",
                en: "Proposal and implementation of new text input method"
            },
            richContent: {
                ja: `
                    <h3>プロジェクト背景</h3>
                    <p>VRゴーグル等のHMD（Head Mounted Display）が普及する中、従来のキーボード入力では手元が見えないという課題がありました。この問題を解決するため、指の動きを追跡して文字入力を行う革新的なインタフェースを開発しました。</p>
                    
                    <h4>開発したシステム</h4>
                    <img src="https://via.placeholder.com/600x400/0066CC/FFFFFF?text=Hand+Tracking+System" alt="手指追跡システム">
                    
                    <h4>技術的アプローチ</h4>
                    <p>OpenCVとMediaPipeを使用して、リアルタイムでの手指認識を実現しました。特に以下の技術を活用：</p>
                    <ul>
                        <li>MediaPipeによる高精度な手指ランドマーク検出</li>
                        <li>カスタムジェスチャー認識アルゴリズム</li>
                        <li>機械学習による入力精度の向上</li>
                        <li>リアルタイム処理の最適化</li>
                    </ul>
                    
                    <h4>デモ動画</h4>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/gRjBkVZlTOw?si=nk9uV7Cedu-1ij8Y" title="指キータス デモ"></iframe>
                                        
                    <h4>コア実装</h4>
                    <pre><code>import mediapipe as mp
import cv2
import numpy as np

class HandTracker:
    def __init__(self):
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(
            static_image_mode=False,
            max_num_hands=2,
            min_detection_confidence=0.7
        )
    
    def process_frame(self, frame):
        results = self.hands.process(frame)
        if results.multi_hand_landmarks:
            return self.extract_landmarks(results)
        return None</code></pre>
                    
                    <h4>コンテスト結果</h4>
                    <p>60名が参加したプログラミングコンテストで<strong>トップ3入賞</strong>を果たしました。審査員からは「将来のHMD時代を見据えた実用的なソリューション」として高い評価をいただきました。</p>
                    
                    <h4>CodePen デモ</h4>
                    <iframe height="400" style="width: 100%;" scrolling="no" title="Hand Gesture Demo" src="https://codepen.io/example/embed/xyz123?default-tab=result" frameborder="no" loading="lazy"></iframe>
                `,
                en: `
                    <h3>Project Background</h3>
                    <p>With the proliferation of HMDs (Head Mounted Displays) like VR goggles, traditional keyboard input faces the challenge of not being able to see your hands. To solve this problem, I developed an innovative interface that performs text input by tracking finger movements.</p>
                    
                    <h4>Developed System</h4>
                    <img src="https://via.placeholder.com/600x400/0066CC/FFFFFF?text=Hand+Tracking+System" alt="Hand Tracking System">
                    
                    <h4>Technical Approach</h4>
                    <p>Used OpenCV and MediaPipe to achieve real-time hand tracking. Specifically utilized the following technologies:</p>
                    <ul>
                        <li>High-precision hand landmark detection with MediaPipe</li>
                        <li>Custom gesture recognition algorithms</li>
                        <li>Improved input accuracy through machine learning</li>
                        <li>Real-time processing optimization</li>
                    </ul>
                    
                    <h4>Demo Video</h4>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Input Interface Demo"></iframe>
                    
                    <h4>Core Implementation</h4>
                    <pre><code>import mediapipe as mp
import cv2
import numpy as np

class HandTracker:
    def __init__(self):
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(
            static_image_mode=False,
            max_num_hands=2,
            min_detection_confidence=0.7
        )
    
    def process_frame(self, frame):
        results = self.hands.process(frame)
        if results.multi_hand_landmarks:
            return self.extract_landmarks(results)
        return None</code></pre>
                    
                    <h4>Contest Results</h4>
                    <p>Achieved <strong>Top 3 placement</strong> in a programming contest with 60 participants. Judges praised it as "a practical solution for the future HMD era."</p>
                    
                    <h4>CodePen Demo</h4>
                    <iframe height="400" style="width: 100%;" scrolling="no" title="Hand Gesture Demo" src="https://codepen.io/example/embed/xyz123?default-tab=result" frameborder="no" loading="lazy"></iframe>
                `
            },
            detailedDescription: {
                ja: "VR ゴーグル等の HMD 装着時の手元が見えない状況を想定した、キーボード入力に変わる新たな入力インタフェースを提案、実装しました。",
                en: "Proposed and implemented a new input interface to replace keyboard input when wearing HMDs like VR goggles."
            },
            technologies: ["Python", "Computer Vision", "Hand Tracking", "VR"],
            period: "2024年11月〜2025年1月",
            github: "https://github.com/medamawa/yubi-key",
            image: "🥽",
            award: {
                ja: "プログラミングコンテスト トップ3入賞",
                en: "Top 3 in Programming Contest"
            }
        },
        {
            id: "design_works",
            title: {
                ja: "デザインワークス",
                en: "Design Works"
            },
            description: {
                ja: "デザインの作品集",
                en: "Collection of design works"
            },
            image: "<img src='./images/design_works/thumbnail.png' alt='thumbnail' style='width: 100%; height: auto;'>",
            technologies: ["Photoshop", "Illustrator", "My Hand"],
            period: "2024年11月〜2025年1月",
            richContent: {
                ja: `
                    <h3>駅看板</h3>

                    <h3>パンフレット２０２４</h3>

                    <h3>新歓紙の一面広告</h3>
                    <img src='./images/design_works/football_ad1.png' alt='paper_ad'>
                `,
                en: `
                    <h3>station ad</h3>

                    <h3>leafret 2024</h3>

                    <h3>ad in school paper</h3>
                    <img src='./images/design_works/football_ad1.png' alt='paper_ad'>
                
                `
            },
            detailedDescription: {
                ja: "あとで消す",
                en: "delete later"
            },
        },
        {
            id: "stirling_engine",
            title: {
                ja: "スターリングエンジン",
                en: "Stirling Engine"
            },
            description: {
                ja: "学生5人で、スターリングエンジンを計画・設計・加工・組み立て",
                en: "Planning, Design, Manufacturing, and Assembly of a Stirling Engine by a Team of 5 Students"
            },
            image: "<img src='./images/stirling_engine/thumbnail.png' alt='thumbnail' style='width: 100%; height: auto;'>",
            technologies: ["CAD", "Thermodynamics", "Kinematics",  "Teamwork", "金属加工"],
            period: "2024年5月〜7月",
            richContent: {
                ja: `
                    <h3>完成品</h3>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/3HUCLQ65Ggw?si=hGABOGLsOHZqKuSC" title="Stirling Engine"></iframe>
                    <p>学生5人のチームで、スターリングエンジンの計画、設計、加工、組み立ての全工程を行った。</p>

                    <h3>計画</h3>
                    スターリングエンジンの概形を決め、製作スケジュールを定めた。

                    <h3>設計</h3>
                    熱力学と材料力学の計算に基づいて詳細な寸法を決定。CADに起こしていった。
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/blueprint1.jpg' alt="blueprint1" style="height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/blueprint2.jpg' alt="blueprint2" style="height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/blueprint3.jpg' alt="blueprint3" style="height: 200px; margin-right: 10px; display: inline-block;">
                    </div>

                    <h3>加工</h3>
                    金属塊を旋盤で削り出し、切断やネジ穴あけを行なった。
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/manufacturing1.jpeg' alt="manufacturing1" style="height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/manufacturing2.jpeg' alt="manufacturing2" style="height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/manufacturing3.jpeg' alt="manufacturing3" style="height: 200px; margin-right: 10px; display: inline-block;">
                    </div>

                    <h3>組み立て</h3>
                    軸合わせの微調整を繰り返しながら組み立てた。
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/assembling.jpeg' alt="assembling" style="height: 200px; margin-right: 10px; display: inline-block;">
                    </div>
                `,
                en: `
                    <h3>Finished Product</h3>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/3HUCLQ65Ggw?si=hGABOGLsOHZqKuSC" title="Stirling Engine"></iframe>
                    <p>A team of 5 students conducted the entire process of planning, designing, manufacturing, and assembling a Stirling engine.</p>

                    <h3>Planning</h3>
                    We determined the overall configuration of the Stirling engine and established the production schedule.

                    <h3>Design</h3>
                    Based on thermodynamic and material mechanics calculations, we determined detailed dimensions and created CAD models.
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/blueprint1.jpg' alt="blueprint1" style="height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/blueprint2.jpg' alt="blueprint2" style="height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/blueprint3.jpg' alt="blueprint3" style="height: 200px; margin-right: 10px; display: inline-block;">
                    </div>

                    <h3>Manufacturing</h3>
                    We machined metal blocks using a lathe, performed cutting operations, and drilled screw holes.
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/manufacturing1.jpeg' alt="manufacturing1" style="height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/manufacturing2.jpeg' alt="manufacturing2" style="height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/manufacturing3.jpeg' alt="manufacturing3" style="height: 200px; margin-right: 10px; display: inline-block;">
                    </div>

                    <h3>Assembly</h3>
                    We assembled the engine while repeatedly making fine adjustments to shaft alignment.
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/assembly.jpeg' alt="assembly" style="height: 200px; margin-right: 10px; display: inline-block;">
                    </div>
                `
            },
            detailedDescription: {
                ja: "VR ゴーグル等の HMD 装着時の手元が見えない状況を想定した、キーボード入力に変わる新たな入力インタフェースを提案、実装しました。",
                en: "Proposed and implemented a new input interface to replace keyboard input when wearing HMDs like VR goggles."
            },
        },
        {
            id: "mini-projects",
            title: {
                ja: "ミニプロジェクト集",
                en: "Vision Assistant App for the Visually Impaired"
            },
            description: {
                ja: "自作bash, 自作renderer, 自作decoderなどのミニプロジェクト集",
                en: "An assistive application for visually impaired users using real-time image recognition"
            },
            detailedDescription: {
                ja: "リアルタイム画像認識技術を用いて、盲導犬の代替となるようなアプリを制作しました。カメラから取得した映像をリアルタイムで解析し、障害物の検出や経路案内を音声で提供します。機械学習モデルを活用して、歩行者、車両、信号機などを高精度で認識し、安全な移動をサポートします。",
                en: "Created an app that serves as an alternative to guide dogs using real-time image recognition technology. It analyzes video footage from the camera in real-time and provides obstacle detection and route guidance through audio. Using machine learning models, it accurately recognizes pedestrians, vehicles, traffic lights, and supports safe movement."
            },
            technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
            period: "2024年2月〜3月",
            github: "https://github.com/medamawa/navi-ken",
            image: "💻"
        },
        {
            id: "sample",
            title: {
                ja: "タイトル",
                en: "title"
            },
            description: {
                ja: "説明",
                en: "description"
            },
            image: "画像",
            technologies: ["タグ", "Computer Vision", "Hand Tracking", "VR"],
            period: "開発期間 2024年11月〜2025年1月",
            richContent: {
                ja: `
                <h1>header 1</h1>
                <h2>header 2</h2>
                <h3>header 3</h3>
                <h4>header 4</h4>
                <p>p tag text <strong>strong one</strong></p>
                plane text

                <h4>image</h4>
                <img src='./images/design_works/thumbnail.png' alt='image'>
                
                <h4>list</h4>
                <ul>
                    <li>list 1</li>
                    <li>list 2</li>
                    <li>list 3</li>
                    <li>list 4</li>
                </ul>
                    
                <h4>youtube link</h4>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/gRjBkVZlTOw?si=nk9uV7Cedu-1ij8Y" title="指キータス デモ"></iframe>
                                        
                <h4>code</h4>
                <pre><code>
#include <iostream>
int main()
{
    std::cout << 'hello world' << std::endl;
    return (0);
}
                </code></pre>
                `,
                en: `
                    <h3>Project Background</h3>
                    <p>With the proliferation of HMDs (Head Mounted Displays) like VR goggles, traditional keyboard input faces the challenge of not being able to see your hands. To solve this problem, I developed an innovative interface that performs text input by tracking finger movements.</p>
                    
                    <h4>Developed System</h4>
                    <img src="https://via.placeholder.com/600x400/0066CC/FFFFFF?text=Hand+Tracking+System" alt="Hand Tracking System">
                    
                    <h4>Technical Approach</h4>
                    <p>Used OpenCV and MediaPipe to achieve real-time hand tracking. Specifically utilized the following technologies:</p>
                    <ul>
                        <li>High-precision hand landmark detection with MediaPipe</li>
                        <li>Custom gesture recognition algorithms</li>
                        <li>Improved input accuracy through machine learning</li>
                        <li>Real-time processing optimization</li>
                    </ul>
                    
                    <h4>Demo Video</h4>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Input Interface Demo"></iframe>
                    
                    <h4>Core Implementation</h4>
                    <pre><code>import mediapipe as mp
import cv2
import numpy as np

class HandTracker:
    def __init__(self):
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(
            static_image_mode=False,
            max_num_hands=2,
            min_detection_confidence=0.7
        )
    
    def process_frame(self, frame):
        results = self.hands.process(frame)
        if results.multi_hand_landmarks:
            return self.extract_landmarks(results)
        return None</code></pre>
                    
                    <h4>Contest Results</h4>
                    <p>Achieved <strong>Top 3 placement</strong> in a programming contest with 60 participants. Judges praised it as "a practical solution for the future HMD era."</p>
                    
                    <h4>CodePen Demo</h4>
                    <iframe height="400" style="width: 100%;" scrolling="no" title="Hand Gesture Demo" src="https://codepen.io/example/embed/xyz123?default-tab=result" frameborder="no" loading="lazy"></iframe>
                `
            },
            detailedDescription: {
                ja: "詳細説明",
                en: "detailed description"
            },
            github: "https://github.com/medamawa/yubi-key",
            award: {
                ja: "プログラミングコンテスト トップ3入賞",
                en: "Top 3 in Programming Contest"
            }
        },
    ],
    
    // Experience data
    experience: [
        {
            date: "2004 - Present",
            title: {
                ja: "この世界 🌍",
                en: "This world 🌍"
            },
            description: {
                ja: "大阪生まれ、大阪育ち",
                en: "Born and raised in Osaka, Japan"
            }
        },
        {
            date: "2016 - 2022",
            title: {
                ja: "灘中学・高等学校",
                en: "Nada Junior and Senior High School"
            },
            description: {
                ja: "自由奔放な学生生活を謳歌",
                en: "Built fundamental academic skills"
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
            date: "2023 - Present",
            title: {
                ja: "42 Tokyo",
                en: "42 Tokyo"
            },
            description: {
                ja: "エンジニア養成機関",
                en: "Learning at an engineer training institution focused on developing not only programming skills but also problem-solving and collaboration abilities. Acquiring low-level programming skills centered on C/C++"
            }
        },
        {
            date: "2024 - 2025",
            title: {
                ja: "東大アメフトチーム VIKINGS 主将",
                en: "Captain, American Football Club, University of Tokyo"
            },
            description: {
                ja: "体重65kg -> 100kg",
                en: "Leading the team towards league championship, implementing team management to ensure all members focus on the goal during practice"
            }
        },
        {
            date: "2025 - 2026",
            title: {
                ja: "ノースイースタン大学（交換留学）",
                en: "Northeastern University, College of Engineering (Exchange Student)"
            },
            description: {
                ja: "工学部に所属。ボストンで学生生活を送る",
                en: "Gaining international perspective through American engineering education for future career development"
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
    ]
};
