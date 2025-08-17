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
            id: "locomi",
            title: {
                ja: "位置情報ベースのSNS & ARレンズ",
                en: "Location-Based SNS & AR Lens"
            },
            description: {
                ja: "位置情報に紐づいた投稿をARで表示できるスマホアプリ",
                en: "A smartphone app that can display location-linked posts in ARRetryClaude can make mistakes. Please double-check responses."
            },
            period: "2020年5月〜9月",
            github: "https://github.com/medamawa/locomiLens",
            image: "<img src='./images/locomi/thumbnail.png' alt='thumbnail' style='width: 100%; height: auto;'>",
            technologies: ["PHP", "Swift", "Laravel", "MySQL", "REST API", "AR", "map"],
            richContent: {
                ja: `
                    <h3>プロジェクト背景</h3>
                    <p>投稿が時系列順に並べられた従来のSNSとは違い、地図上に投稿を残すというコンセプトのSNSです。スマホをかざせばARで投稿を見ることができる機能も開発しました。</p>
                    <iframe height="300" src="https://www.youtube.com/embed/FoSsrp1GUYw?si=p2KbmLKeH4v9E2i_?rel=0" title="locomi" allowfullscreen></iframe>

                    <h4>主な機能</h4>
                    <ul>
                        <li>位置情報に紐づいた投稿の作成・表示</li>
                        <li>ARを用いた実世界への投稿表示</li>
                        <li>リアルタイムでの投稿マッピング</li>
                        <li>JWTを用いたセキュアなユーザー管理</li>
                        <li>keychainで認証情報を保持</li>
                    </ul>

                    <h3>技術的な挑戦</h3>
                    <p>Laravelで認証や投稿管理を行うAPIを開発し、SwiftでiOSアプリを制作しました。特に困難だったのは、以下の点です。</p>
                    <ul>
                        <li>位置情報誤差の扱い</li>
                        <li>位置情報ベースでの投稿ソーティング</li>
                        <li>実運用に耐えうるAR機能の実装</li>
                    </ul>

                    <h3>開発を辞めた理由と今後</h3>
                    <p>このSNSは、コロナが大流行して家に篭っていた時期（当時、高校3年生）に、地図上にいろんな投稿があれば家にいても旅行気分が味わえる!!、という好奇心から開発を始めたものです。しかし、受験勉強が本格化するにつれて開発に充てられる時間が少なくなり、デモ動画を撮影した時点で初期コンセプトの具現化は達成されたので開発を辞めました。</p>
                    <p>このコンセプトは自分のお気に入りなので、今後やる気が出ればのんびりと開発をしようと思います。その時に一緒に開発してくれるエンジニアを募集してます!!</p>
                `,
                en: `
                    <h3>Project Background</h3>
                    <p>Unlike traditional social media platforms where posts are arranged in chronological order, this is a social media concept that allows users to leave posts on a map. I also developed a feature that enables users to view posts in AR by holding up their smartphones.</p>
                    <iframe height="300" src="https://www.youtube.com/embed/FoSsrp1GUYw?si=p2KbmLKeH4v9E2i_?rel=0" title="locomi" allowfullscreen></iframe>

                    <h4>Main Features</h4>
                    <ul>
                        <li>Creating and displaying posts linked to location information</li>
                        <li>Displaying posts in the real world using AR</li>
                        <li>Real-time post mapping</li>
                        <li>Secure user management using JWT</li>
                        <li>Authentication information stored in keychain</li>
                    </ul>

                    <h3>Technical Challenges</h3>
                    <p>I developed an API using Laravel for authentication and post management, and created an iOS app using Swift. The particularly challenging aspects were:</p>
                    <ul>
                        <li>Handling location information errors</li>
                        <li>Sorting posts based on location information</li>
                        <li>Implementing AR functionality that could withstand actual operation</li>
                    </ul>

                    <h3>Why Development Was Discontinued and Future Plans</h3>
                    <p>This social media platform began development out of curiosity during the COVID-19 pandemic when I was staying at home (I was a high school senior at the time), with the idea that having various posts on a map would allow people to feel like they were traveling even while staying at home!! However, as entrance exam preparations intensified, I had less time to dedicate to development. Since the initial concept had been realized by the time I filmed the demo video, I discontinued development.</p>
                    <p>This concept is a personal favorite of mine, so I'm thinking of leisurely continuing development if I feel motivated in the future. I'm looking for engineers who would like to develop this together!!</p>
                `
            },
        },
        {
            id: "yubi-key",
            title: {
                ja: "HMD時代に向けた新しい入力インタフェース",
                en: "New Input Interface for HMD Era"
            },
            description: {
                ja: "革新的な文字入力インタフェースの提案と実装",
                en: "Proposal and implementation of new text input method"
            },
            period: "2024年11月〜2025年1月",
            github: "https://github.com/medamawa/yubi-key",
            award: {
                ja: "プログラミングコンテスト トップ3入賞",
                en: "Top 3 in UTokyo Programming Contest"
            },
            image: "<img src='./images/yubi_key/sashimida.png' alt='thumbnail' style='width: 100%; height: auto;'>",
            technologies: ["Python", "OpenCV", "Computer Vision", "Human Interface", "Hand Tracking", "VR", "AR"],
            richContent: {
                ja: `
                    <h3>プロジェクト背景</h3>
                    <p>VRゴーグル等のHead Mounted Display（HMD）の普及が進む中、その入力インタフェースは未だ確立されていません。HMDを装着すると手元が見えなくなるため、従来のキーボードを使うことができず、仮想空間上のキーボードで入力するのが主流です。しかし、物理フィードバックを前提として進化してきたキーボードは、この利用シーンに最適化されていません。</p>
                    <p>そこで、指の動きを追跡して文字入力を行う革新的なインタフェース「指キータス」を開発しました。これは「ユビキタス x 指キー」のコンセプトで、いつでもどこでも指だけで入力できるシステムです。</p>
                    <iframe height="300" src="https://www.youtube.com/embed/gRjBkVZlTOw?si=nk9uV7Cedu-1ij8Y?rel=0" title="yubi-key" allowfullscreen></iframe>

                    <h3>技術的アプローチ</h3>
                    <p>指キータスは、各指の位置をバイナリ（0/1）で表現し、その組み合わせによって文字を入力するシステムです。実装にはARマーカーを使用し、リアルタイムで手指の動きを認識することを可能にしています。</p>
                    <h4>基本メカニズム</h4>
                    <ul>
                        <li>左手でレイヤー（入力モード）を選択</li>
                        <li>右手で文字を選択（5本指の組み合わせで32通りの入力が可能）</li>
                        <li>左手親指で入力を確定</li>
                    </ul>
                    <h4>レイヤー構造</h4>
                    <ul>
                        <li>レイヤー1：使用頻度の高い基本文字（a, e, o, t, r など）</li>
                        <li>レイヤー2：その他のアルファベット（h, i, y, l, m など）</li>
                        <li>レイヤー3：記号類（カンマ、ピリオド、疑問符など）</li>
                    </ul>

                    <h3>工夫</h3>
                    <h4>文字配置の最適化</h4>
                    <p>英語で最も使用頻度の高い文字を、単一の指を動かすだけで入力できる位置に配置しました。さらに、頻出する文字の組み合わせ（例：th, er, you など）を考慮し、連続入力時の指の動きが自然になるよう配置を工夫しました。これにより、少ない動作で効率的な入力が可能になります。</p>
                    <h4>誤入力防止の仕組み</h4>
                    <p>指のオンオフを切り替える閾値を可変に決定し、使用環境や個人の癖に適応できるようにしました。また、作るのが難しい運指や似たような指の形は避けるようにレイヤーを配置し、認識精度と操作性を向上させています。</p>

                    <h3>刺身打の開発</h3>
                    <p>指キータスを楽しく練習できるよう、独自のタイピングゲーム「刺身打」を開発しました。これは有名な「寿司打」にインスパイアされた練習ソフトで、回転寿司のレーンを流れる刺身が画面外に出る前に、表示された英単語をタイピングするゲームです。</p>
                    <iframe height="300" src="https://www.youtube.com/embed/uUMfLdd6yK8?si=nk9uV7Cedu-1ij8Y?rel=0" title="sashimida" allowfullscreen></iframe>
                    <h4>主な機能</h4>
                    <ul>
                        <li>左右の手のポジションをリアルタイムで可視化</li>
                        <li>入力速度と正確性をスコア化して表示</li>
                        <li>段階的な難易度設定（初級・中級・上級）</li>
                    </ul>
                    <p>実際にDvorak配列を3日間練習したユーザーと対戦デモを行い、新しい入力方式でも実用的な速度で入力できることを実証しました。また、プロジェクトの発表資料自体を指キータスで作成し、システムの実用性を証明しました。</p>
                `,
                en: `
                    <h3>Project Background</h3>
                    <p>As Head-Mounted Displays (HMDs) and VR goggles become increasingly prevalent, their input interfaces remain largely unoptimized. When wearing an HMD, users cannot see their hands, making traditional keyboards impractical. Existing solutions typically rely on virtual keyboards displayed in the virtual space, but these lack the physical feedback that conventional keyboards provide.</p>
                    <p>To address this challenge, I developed "Yubi-Key," an innovative interface that enables text input through finger-movement tracking. This system allows users to type using only finger gestures, making it well-suited for VR environments.</p>
                    <iframe height="300" src="https://www.youtube.com/embed/gRjBkVZlTOw?si=nk9uV7Cedu-1ij8Y?rel=0" title="yubi-key" allowfullscreen></iframe>

                    <h3>Technical Approach</h3>
                    <p>Yubi-Key represents each finger position in binary (0/1), using combinations to input characters. The implementation uses AR markers to enable real-time finger movement recognition.</p>
                    <h4>Core Mechanism</h4>
                    <ul>
                        <li>Left hand selects layers (input modes)</li>
                        <li>Right hand selects characters (32 possible inputs using 5-finger combinations)</li>
                        <li>Left thumb confirms input</li>
                    </ul>
                    <h4>Layer Structure</h4>
                    <ul>
                        <li>Layer 1: High-frequency basic letters (a, e, o, t, r, etc.)</li>
                        <li>Layer 2: Additional alphabets (h, i, y, l, m, etc.)</li>
                        <li>Layer 3: Symbols (comma, period, question mark, etc.)</li>
                    </ul>

                    <h3>Key Innovations</h3>
                    <h4>Optimized Character Placement</h4>
                    <p>The most frequently used English letters are positioned for single-finger activation. Additionally, common letter combinations (e.g., th, er, you) are considered to ensure natural finger movements during continuous input, enabling efficient typing with minimal motion.</p>
                    <h4>Error Prevention System</h4>
                    <p>The on/off threshold for finger detection is dynamically adjustable, adapting to different environments and individual user habits. Layer arrangements avoid difficult finger positions and similar hand shapes, improving recognition accuracy and usability.</p>

                    <h3>Sashimida Development</h3>
                    <p>To make learning Yubi-Key enjoyable, I developed "Sashimida," a unique typing game. Inspired by the popular "Sushi-Da" typing game, players must type displayed English words before sashimi pieces flow off the conveyor belt screen.</p>
                    <iframe height="300" src="https://www.youtube.com/embed/uUMfLdd6yK8?si=nk9uV7Cedu-1ij8Y?rel=0" title="sashimida" allowfullscreen></iframe>
                    <h4>Main Features</h4>
                    <ul>
                        <li>Real-time visualization of left and right hand positions</li>
                        <li>Scoring system for typing speed and accuracy</li>
                        <li>Progressive difficulty levels (beginner, intermediate, advanced)</li>
                    </ul>
                    <p>In a demonstration match against a user who practiced Dvorak layout for three days, I proved that this new input method achieves practical typing speeds. Furthermore, I created the project presentation itself using Yubi-Key, demonstrating the system's real-world applicability.</p>

            `
            },
        },
        {
            id: "design-works",
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
            period: "While taking a shower",
            richContent: {
                ja: `
                    <h3>新歓紙の一面広告</h3>
                    <img style="max-height: 700px;" src='./images/design_works/football_ad1.png' alt='paper_ad'>

                    <h3>SNSコンテンツ</h3>
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/design_works/sns1.png' alt="sns1" style="max-height: 400px; margin-right: 10px; display: inline-block;">
                        <img src='./images/design_works/sns2.png' alt="sns2" style="max-height: 400px; margin-right: 10px; display: inline-block;">
                        <img src='./images/design_works/sns3.png' alt="sns3" style="max-height: 400px; margin-right: 10px; display: inline-block;">
                    </div>

                    <h3>新歓パンフレット</h3>
                    <iframe height="600" src="https://drive.google.com/file/d/17sHgWlB2teB97fwihvM-UUAeKbPZb8gP/preview" title="VIKINGS Brochure 2023"></iframe>

                    <h3>駅看板</h3>
                    <p>京王井の頭線・駒場東大前駅に掲載されている。</p>
                    <img style="max-height: 500px;" src='./images/design_works/brochure.jpg' alt='brochure'>
                `,
                en: `
                    <h3>New Student Welcome Paper Full-Page Advertisement</h3>
                    <img style="max-height: 700px;" src='./images/design_works/football_ad1.png' alt='paper_ad'>

                    <h3>SNS Content</h3>
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/design_works/sns1.png' alt="sns1" style="max-height: 400px; margin-right: 10px; display: inline-block;">
                        <img src='./images/design_works/sns2.png' alt="sns2" style="max-height: 400px; margin-right: 10px; display: inline-block;">
                        <img src='./images/design_works/sns3.png' alt="sns3" style="max-height: 400px; margin-right: 10px; display: inline-block;">
                    </div>

                    <h3>Brochure</h3>
                    <iframe height="600" src="https://drive.google.com/file/d/17sHgWlB2teB97fwihvM-UUAeKbPZb8gP/preview" title="VIKINGS Brochure 2023"></iframe>

                    <h3>Station Advertisement</h3>
                    <p>Featured at Komaba-Todaimae Station on the Keio Inokashira Line.</p>
                    <img style="max-height: 500px;" src='./images/design_works/brochure.jpg' alt='brochure'>
                
                `
            },
        },
        {
            id: "stirling-engine",
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
                    <iframe height="300" src="https://www.youtube.com/embed/3HUCLQ65Ggw?rel=0" title="Stirling Engine" allowfullscreen></iframe>
                    <p>学生5人のチームで、スターリングエンジンの計画、設計、加工、組み立ての全工程を行った。</p>

                    <h3>計画</h3>
                    スターリングエンジンの概形を決め、製作スケジュールを定めた。

                    <h3>設計</h3>
                    熱力学と材料力学の計算に基づいて詳細な寸法を決定。CADに起こしていった。
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/blueprint1.jpg' alt="blueprint1" style="max-height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/blueprint2.jpg' alt="blueprint2" style="max-height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/blueprint3.jpg' alt="blueprint3" style="max-height: 200px; margin-right: 10px; display: inline-block;">
                    </div>

                    <h3>加工</h3>
                    金属塊を旋盤で削り出し、切断やネジ穴あけを行なった。
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/manufacturing1.jpeg' alt="manufacturing1" style="max-height: 300px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/manufacturing2.jpeg' alt="manufacturing2" style="max-height: 300px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/manufacturing3.jpeg' alt="manufacturing3" style="max-height: 300px; margin-right: 10px; display: inline-block;">
                    </div>

                    <h3>組み立て</h3>
                    軸合わせの微調整を繰り返しながら組み立てた。
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/assembly.jpeg' alt="assembly" style="max-height: 300px; margin-right: 10px; display: inline-block;">
                    </div>
                `,
                en: `
                    <h3>Finished Product</h3>
                    <iframe height="300" src="https://www.youtube.com/embed/3HUCLQ65Ggw?si=hGABOGLsOHZqKuSC?rel=0" title="Stirling Engine" allowfullscreen></iframe>
                    <p>A team of 5 students conducted the entire process of planning, designing, manufacturing, and assembling a Stirling engine.</p>

                    <h3>Planning</h3>
                    We determined the overall configuration of the Stirling engine and established the production schedule.

                    <h3>Design</h3>
                    Based on thermodynamic and material mechanics calculations, we determined detailed dimensions and created CAD models.
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/blueprint1.jpg' alt="blueprint1" style="max-height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/blueprint2.jpg' alt="blueprint2" style="max-height: 200px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/blueprint3.jpg' alt="blueprint3" style="max-height: 200px; margin-right: 10px; display: inline-block;">
                    </div>

                    <h3>Manufacturing</h3>
                    We machined metal blocks using a lathe, performed cutting operations, and drilled screw holes.
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/manufacturing1.jpeg' alt="manufacturing1" style="max-height: 300px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/manufacturing2.jpeg' alt="manufacturing2" style="max-height: 300px; margin-right: 10px; display: inline-block;">
                        <img src='./images/stirling_engine/manufacturing3.jpeg' alt="manufacturing3" style="max-height: 300px; margin-right: 10px; display: inline-block;">
                    </div>

                    <h3>Assembly</h3>
                    We assembled the engine while repeatedly making fine adjustments to shaft alignment.
                    <div style='width: 100%; overflow-x: auto; white-space: nowrap; padding: 20px;'>
                        <img src='./images/stirling_engine/assembly.jpeg' alt="assembly" style="max-height: 300px; margin-right: 10px; display: inline-block;">
                    </div>
                `
            },
        },
        {
            id: "projects",
            title: {
                ja: "ミニプロジェクト集",
                en: "Mini Projects"
            },
            description: {
                ja: "自作bash, Raytracer, Huffman Encoder/Decoder, …etc",
                en: "Custom Bash, Raytracer, Huffman Encoder/Decoder, …etc"
            },
            period: "2020年5月〜9月",
            github: "https://github.com/medamawa",
            image: "<img src='./images/mini_projects/thumbnail.png' alt='thumbnail' style='width: 100%; height: auto;'>",
            technologies: ["C/C++", "Linus Torvalds", "Algorithm", "Computer Science", "Laravel", "42Tokyo", "return (0);"],
            richContent: {
                ja: `
                    <h3>自作bash</h3>
                    <script src="https://asciinema.org/a/eUFYKjNtIZ8StjsK6YKRtfisi.js" id="asciicast-eUFYKjNtIZ8StjsK6YKRtfisi" async="true"></script>
                    <h4>実装</h4>
                    <ul>
                        <li>レキサー、パーサー</li>
                        <li>環境変数のexpand</li>
                        <li>プロセス間通信</li>
                        <li>ビルトイン関数</li>
                        <li>C言語（システムコール以外は全て自作関数）</li>
                    </ul>

                    <h3>Raytracer</h3>
                    <img style="max-height: 500px;" src='./images/mini_projects/minirt.png' alt='minirt'>
                    <h4>実装</h4>
                    <ul>
                        <li>レイトレーシング</li>
                        <li>マルチスレッド計算による高速化</li>
                        <li>メモリセーフな実装</li>
                    </ul>

                    <h3>Huffman Encoder/Decoder</h3>
                    <script src="https://asciinema.org/a/s2kiehcA1OqMa7SELa33yA1F1.js" id="asciicast-s2kiehcA1OqMa7SELa33yA1F1" async="true"></script>
                    <h4>実装</h4>
                    <ul>
                        <li>ハフマン符号化と復号化</li>
                        <li>一般的なテキストファイルでの圧縮率は約50%を達成</li>
                    </ul>
                `,
                en: `
                    <h3>Custom Bash</h3>
                    <script src="https://asciinema.org/a/eUFYKjNtIZ8StjsK6YKRtfisi.js" id="asciicast-eUFYKjNtIZ8StjsK6YKRtfisi" async="true"></script>
                    <h4>Implementation Features</h4>
                    <ul>
                        <li>Lexer and Parser</li>
                        <li>Environment variable expansion</li>
                        <li>Inter-process communication</li>
                        <li>Built-in functions</li>
                        <li>C language (all functions custom-built except system calls)</li>
                    </ul>

                    <h3>Raytracer</h3>
                    <img style="max-height: 500px;" src='./images/mini_projects/minirt.png' alt='minirt'>
                    <h4>Implementation Features</h4>
                    <ul>
                        <li>Ray tracing algorithm</li>
                        <li>Multithreaded computation for performance optimization</li>
                        <li>Memory-safe implementation</li>
                    </ul>

                    <h3>Huffman Encoder/Decoder</h3>
                    <script src="https://asciinema.org/a/s2kiehcA1OqMa7SELa33yA1F1.js" id="asciicast-s2kiehcA1OqMa7SELa33yA1F1" async="true"></script>
                    <h4>Implementation Features</h4>
                    <ul>
                        <li>Huffman encoding and decoding</li>
                        <li>Achieves approximately 50% compression ratio on typical text files</li>
                    </ul>
                `
            },
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
