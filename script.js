// ─────────────────────────────────────────
// DDM Showcase — script.js
// Language system + animations
// ─────────────────────────────────────────

// ── Translation Data ──
const translations = {
  en: {
    dir: 'ltr',
    label: 'EN',
    nav_home: 'Home', nav_about: 'About', nav_assignments: 'Assignments', nav_skills: 'Skills',
    hero_badge: 'M.Tech · Distributed Systems · 2026',
    hero_title_1: 'Distributed', hero_title_2: 'Data Management',
    hero_subtitle: 'An interactive showcase of data parsing, distributed databases, exploratory analysis pipelines, and federated data architecture.',
    btn_explore: 'Explore Assignments', btn_github: 'View on GitHub',
    stat_label_1: 'Assignments', stat_label_2: 'Experiments', stat_label_3: 'Technologies',
    about_tag: 'Course Overview', about_title: 'What I Learned',
    about_desc: 'A deep dive into managing data at scale — from raw ingestion to distributed intelligence.',
    about_card1_title: 'Data Engineering', about_card1_desc: 'Mastering heterogeneous data ingestion — CSV, JSON, XML, binary formats, HTML scraping, and SQL/NoSQL CRUD operations with Python.',
    about_card2_title: 'Federated Architecture', about_card2_desc: 'Understanding distributed query processing, schema heterogeneity, mediator-wrapper patterns, and CAP theorem tradeoffs in modern data systems.',
    about_card3_title: 'Exploratory Analysis', about_card3_desc: 'Pre-processing pipelines with feature engineering, outlier detection, correlation heatmaps, and statistical analysis on real-world Indian water resource data.',
    about_card4_title: 'Machine Learning', about_card4_desc: 'Applying Linear Regression for predictive modeling with StandardScaler, train-test splits, and performance metrics on water-resource datasets.',
    assign_tag: 'Portfolio', assign_title: 'Assignments Showcase',
    assign_desc: 'Click on an assignment card to explore the full report, code, and experimental outputs.',
    card1_badge: 'Lab 01', card1_title: 'Database & Analysis Pipeline', card1_sub: 'End-to-End Data Management',
    card1_desc: 'A comprehensive lab covering data parsing across multiple formats, NoSQL/SQL CRUD operations, EDA with visualization, and a Linear Regression ML model on Indian Water Resource data.',
    card1_link: 'View Lab Report & Code →',
    card2_badge: 'Theory 01', card2_title: 'Federated Data Management', card2_sub: 'Academic Research Report',
    card2_desc: 'A professional book-format chapter on Federated Data Management — covering distributed query processing, schema heterogeneity resolution, mediator-wrapper architecture, 2PC/Saga transactions, CAP theorem, security & privacy.',
    card2_link: 'Open Digital Report →',
    skills_tag: 'Tech Stack', skills_title: 'Tools & Technologies',
    footer_txt: '© 2026 Distributed Data Management Showcase · Made with ❤️ by Stanzin Angmo',
  },
  hi: {
    dir: 'ltr', label: 'हिं',
    nav_home: 'मुख्य पृष्ठ', nav_about: 'परिचय', nav_assignments: 'कार्य', nav_skills: 'कौशल',
    hero_badge: 'एम.टेक · वितरित प्रणाली · 2026',
    hero_title_1: 'वितरित', hero_title_2: 'डेटा प्रबंधन',
    hero_subtitle: 'डेटा पार्सिंग, वितरित डेटाबेस, अन्वेषणात्मक विश्लेषण पाइपलाइन और फेडरेटेड डेटा आर्किटेक्चर का एक इंटरेक्टिव शोकेस।',
    btn_explore: 'कार्य देखें', btn_github: 'GitHub पर देखें',
    stat_label_1: 'कार्यभार', stat_label_2: 'प्रयोग', stat_label_3: 'तकनीकें',
    about_tag: 'पाठ्यक्रम अवलोकन', about_title: 'मैंने क्या सीखा',
    about_desc: 'डेटा को बड़े पैमाने पर प्रबंधित करने की गहन समझ — कच्चे डेटा से वितरित बुद्धिमत्ता तक।',
    about_card1_title: 'डेटा इंजीनियरिंग', about_card1_desc: 'CSV, JSON, XML, बाइनरी फ़ॉर्मेट, HTML स्क्रेपिंग और SQL/NoSQL CRUD संचालन में दक्षता।',
    about_card2_title: 'फेडरेटेड आर्किटेक्चर', about_card2_desc: 'वितरित क्वेरी प्रसंस्करण, स्कीमा विषमता और CAP प्रमेय की समझ।',
    about_card3_title: 'अन्वेषणात्मक विश्लेषण', about_card3_desc: 'फीचर इंजीनियरिंग, सहसंबंध हीटमैप और भारतीय जल संसाधन डेटा का सांख्यिकीय विश्लेषण।',
    about_card4_title: 'मशीन लर्निंग', about_card4_desc: 'StandardScaler, ट्रेन-टेस्ट स्प्लिट और प्रदर्शन मेट्रिक्स के साथ लीनियर रिग्रेशन मॉडलिंग।',
    assign_tag: 'पोर्टफोलियो', assign_title: 'कार्य प्रदर्शनी',
    assign_desc: 'पूरी रिपोर्ट, कोड और आउटपुट देखने के लिए कार्ड पर क्लिक करें।',
    card1_badge: 'लैब 01', card1_title: 'डेटाबेस और विश्लेषण पाइपलाइन', card1_sub: 'संपूर्ण डेटा प्रबंधन',
    card1_desc: 'बहु-प्रारूप डेटा पार्सिंग, NoSQL/SQL CRUD, EDA विज़ुअलाइज़ेशन और ML मॉडल को कवर करने वाली व्यापक लैब।',
    card1_link: 'लैब रिपोर्ट और कोड देखें →',
    card2_badge: 'थ्योरी 01', card2_title: 'फेडरेटेड डेटा प्रबंधन', card2_sub: 'शैक्षणिक अनुसंधान रिपोर्ट',
    card2_desc: 'फेडरेटेड डेटा प्रबंधन पर पेशेवर पुस्तक अध्याय — वितरित क्वेरी, स्कीमा विषमता, 2PC, CAP प्रमेय।',
    card2_link: 'डिजिटल रिपोर्ट खोलें →',
    skills_tag: 'तकनीकी स्टैक', skills_title: 'उपकरण और तकनीकें',
    footer_txt: '© 2026 वितरित डेटा प्रबंधन शोकेस · Stanzin Angmo द्वारा ❤️ के साथ बनाया गया',
  },
  kn: {
    dir: 'ltr', label: 'ಕನ್ನ',
    nav_home: 'ಮುಖಪುಟ', nav_about: 'ಬಗ್ಗೆ', nav_assignments: 'ಕಾರ್ಯಗಳು', nav_skills: 'ಕೌಶಲ್ಯ',
    hero_badge: 'ಎಂ.ಟೆಕ್ · ವಿತರಿತ ವ್ಯವಸ್ಥೆಗಳು · 2026',
    hero_title_1: 'ವಿತರಿತ', hero_title_2: 'ಡೇಟಾ ನಿರ್ವಹಣೆ',
    hero_subtitle: 'ಡೇಟಾ ಪಾರ್ಸಿಂಗ್, ವಿತರಿತ ಡೇಟಾಬೇಸ್ ಮತ್ತು ಫೆಡರೇಟೆಡ್ ಡೇಟಾ ಆರ್ಕಿಟೆಕ್ಚರ್‌ನ ಇಂಟರ್ಯಾಕ್ಟಿವ್ ಪ್ರದರ್ಶನ.',
    btn_explore: 'ಕಾರ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ', btn_github: 'GitHub ನಲ್ಲಿ ವೀಕ್ಷಿಸಿ',
    stat_label_1: 'ಕಾರ್ಯಗಳು', stat_label_2: 'ಪ್ರಯೋಗಗಳು', stat_label_3: 'ತಂತ್ರಜ್ಞಾನ',
    about_tag: 'ಕೋರ್ಸ್ ಅವಲೋಕನ', about_title: 'ನಾನು ಕಲಿತದ್ದು',
    about_desc: 'ಡೇಟಾ ಇಂಜೆಷನ್‌ನಿಂದ ವಿತರಿತ ಬುದ್ಧಿಮತ್ತೆಯವರೆಗೆ ಡೇಟಾ ನಿರ್ವಹಣೆಯ ಆಳವಾದ ಅಧ್ಯಯನ.',
    about_card1_title: 'ಡೇಟಾ ಎಂಜಿನಿಯರಿಂಗ್', about_card1_desc: 'CSV, XML, HTML, ಬೈನರಿ ಫಾರ್ಮ್ಯಾಟ್ಗಳಲ್ಲಿ ಡೇಟಾ ಇಂಜೆಷನ್ ಮತ್ತು SQL/NoSQL CRUD.',
    about_card2_title: 'ಫೆಡರೇಟೆಡ್ ಆರ್ಕಿಟೆಕ್ಚರ್', about_card2_desc: 'ವಿತರಿತ ಕ್ವೆರಿ ಪ್ರಕ್ರಿಯೆ, ಸ್ಕೀಮಾ ವಿಭಿನ್ನತೆ ಮತ್ತು CAP ಪ್ರಮೇಯ.',
    about_card3_title: 'ಪರಿಶೋಧನಾ ವಿಶ್ಲೇಷಣೆ', about_card3_desc: 'ಭಾರತೀಯ ಜಲ ಸಂಪನ್ಮೂಲ ಡೇಟಾದ ಪ್ರಿ-ಪ್ರೊಸೆಸಿಂಗ್ ಮತ್ತು ಸಹಸಂಬಂಧ ಹೀಟ್‌ಮ್ಯಾಪ್.',
    about_card4_title: 'ಮೆಷಿನ್ ಲರ್ನಿಂಗ್', about_card4_desc: 'StandardScaler ಮತ್ತು R² ಸ್ಕೋರ್‌ನೊಂದಿಗೆ ಲೀನಿಯರ್ ರಿಗ್ರೆಷನ್ ಮಾಡೆಲಿಂಗ್.',
    assign_tag: 'ಪೋರ್ಟ್‌ಫೋಲಿಯೋ', assign_title: 'ಕಾರ್ಯಗಳ ಪ್ರದರ್ಶನ',
    assign_desc: 'ಸಂಪೂರ್ಣ ವರದಿ ಮತ್ತು ಕೋಡ್ ನೋಡಲು ಕಾರ್ಡ್ ಕ್ಲಿಕ್ ಮಾಡಿ.',
    card1_badge: 'ಲ್ಯಾಬ್ 01', card1_title: 'ಡೇಟಾಬೇಸ್ ಮತ್ತು ವಿಶ್ಲೇಷಣಾ ಪೈಪ್ಲೈನ್', card1_sub: 'ಸಂಪೂರ್ಣ ಡೇಟಾ ನಿರ್ವಹಣೆ',
    card1_desc: 'ಬಹು ಫಾರ್ಮ್ಯಾಟ್ ಡೇಟಾ ಪಾರ್ಸಿಂಗ್, NoSQL/SQL CRUD, EDA ವಿಜ್ಞಾನ ಮತ್ತು ML ಮಾಡೆಲ್ ಒಳಗೊಂಡ ಲ್ಯಾಬ್.',
    card1_link: 'ಲ್ಯಾಬ್ ವರದಿ ಮತ್ತು ಕೋಡ್ ವೀಕ್ಷಿಸಿ →',
    card2_badge: 'ಥಿಯರಿ 01', card2_title: 'ಫೆಡರೇಟೆಡ್ ಡೇಟಾ ನಿರ್ವಹಣೆ', card2_sub: 'ಶೈಕ್ಷಣಿಕ ಸಂಶೋಧನಾ ವರದಿ',
    card2_desc: 'ಫೆಡರೇಟೆಡ್ ಡೇಟಾ ನಿರ್ವಹಣೆ ಕುರಿತ ಪ್ರೊಫೆಷನಲ್ ಪುಸ್ತಕ ಅಧ್ಯಾಯ.',
    card2_link: 'ಡಿಜಿಟಲ್ ವರದಿ ತೆರೆಯಿರಿ →',
    skills_tag: 'ತಂತ್ರಾಂಶ', skills_title: 'ಉಪಕರಣಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನ',
    footer_txt: '© 2026 ವಿತರಿತ ಡೇಟಾ ನಿರ್ವಹಣೆ ಶೋಕೇಸ್ · Stanzin Angmo ❤️',
  },
  lad: {
    dir: 'ltr', label: 'ལད',
    nav_home: 'གཙོ་ངོས', nav_about: 'ངོ་སྤྲོད', nav_assignments: 'ལས་འགན', nav_skills: 'ནུས་ཤེས',
    hero_badge: 'ཨེམ.ཊེཀ་ · སྤེལ་མའི་མ་ལག · 2026',
    hero_title_1: 'སྤེལ་མ', hero_title_2: 'གནས་ཚུལ་སྒྲིག་འཛིན',
    hero_subtitle: 'གནས་ཚུལ་དབྱེ་ཞིབ་དང་སྤேལ་མའི་གནས་གཞི་ཁང་གི་ཤོ་ཀེས།',
    btn_explore: 'ལས་འགན་ལ་ལྟ་བ', btn_github: 'GitHub ལ་ལྟ་བ',
    stat_label_1: 'ལས་འགན', stat_label_2: 'ཚོད་ལྟ', stat_label_3: 'ལག་རྩལ',
    about_tag: 'སློབ་གཞི་སྔོན་ལྟ', about_title: 'ངས་ཅི་སྦྱངས',
    about_desc: 'གནས་ཚུལ་སྒྲིག་འཛིན་གྱི་ཟབ་མོའི་སློབ་གཞི།',
    about_card1_title: 'གནས་ཚུལ་འཕྲུལ་རིག', about_card1_desc: 'CSV, XML, HTML གནས་ཚུལ་དབྱེ་ཞིབ་དང་SQL/NoSQL ལག་ལེན།',
    about_card2_title: 'སྦྲེལ་མའི་དབྱིངས', about_card2_desc: 'གནས་ཚུལ་གཙོས་ཞི་གྲུབ་ཀྱི་བཀོལ་སྤྱོད་དང་CAP ཁས་ལེན།',
    about_card3_title: 'ཞིབ་འཇུག་དབྱེ་ཞིབ', about_card3_desc: 'གནས་ཚུལ་བཅོས་ཐབས་དང་ལྷན་འབྲེལ་ཐིག་ཁྲ།',
    about_card4_title: 'འཕྲུལ་འཁོར་སྦྱང་བ', about_card4_desc: 'LinearRegression དང་R² གྲུབ་འབྲས་དབྱེ་ཞིབ།',
    assign_tag: 'ལས་འཁོར', assign_title: 'ལས་འགན་ཤོ་ཀེས',
    assign_desc: 'ཚུལ་གྱི་སྙིང་དོན་མཐོང་རྒྱུར་ལས་འགན་ལ་ཨེབ་གཤིབ་རྒྱག།',
    card1_badge: 'ཚོད་ལྟ་ 01', card1_title: 'གནས་གཞི་ཁང་དང་དབྱེ་ཞིབ་ལས་ལམ', card1_sub: 'ཚང་མའི་གནས་ཚུལ་སྒྲིག་འཛིན',
    card1_desc: 'གནས་ཚུལ་དབྱེ་ཞིབ་དང་ML མཐུན་ལམ་ཚང་མ་ཚུད་པའི་ཚོད་ལྟ།',
    card1_link: 'ཚོད་ལྟའི་ཡིག་ཆ་ལྟ་བ →',
    card2_badge: 'རྒྱུས་ལོན་ 01', card2_title: 'སྦྲེལ་མའི་གནས་ཚུལ་སྒྲིག་འཛིན', card2_sub: 'ཞིབ་འཇུག་ཡིག་ཆ',
    card2_desc: 'སྦྲེལ་མའི་གནས་ཚུལ་སྒྲིག་འཛིན་ཀྱི་ཕོབ་དཔེ་ལུ་གུ་རྒྱུགས།',
    card2_link: 'ཡིག་ཆ་ཕྱེ་བ →',
    skills_tag: 'ལག་རྩལ་ཆ་ཚང', skills_title: 'ལག་ཆ་དང་ལག་རྩལ',
    footer_txt: '© 2026 སྤེལ་མའི་གནས་ཚུལ་སྒྲིག་འཛིན་ཤོ་ཀེས · Stanzin Angmo ❤️',
  },
  ml: {
    dir: 'ltr', label: 'മലയ',
    nav_home: 'ഹോം', nav_about: 'ഞങ്ങളേക്കുറിച്ച്', nav_assignments: 'അസൈൻമെന്റുകൾ', nav_skills: 'കഴിവുകൾ',
    hero_badge: 'എം.ടെക് · ഡിസ്ട്രിബ്യൂട്ടഡ് സിസ്റ്റംസ് · 2026',
    hero_title_1: 'വിതരണം ചെയ്ത', hero_title_2: 'ഡാറ്റ മാനേജ്മെന്റ്',
    hero_subtitle: 'ഡാറ്റ പാർസിങ്, ഡിസ്ട്രിബ്യൂട്ടഡ് ഡാറ്റാബേസ്, ഫെഡറേറ്റഡ് ഡാറ്റ ആർക്കിടെക്ചർ എന്നിവയുടെ ഒരു ഇന്ററാക്ടിവ് ഷോകേസ്.',
    btn_explore: 'അസൈൻമെന്റുകൾ കാണുക', btn_github: 'GitHub-ൽ കാണുക',
    stat_label_1: 'അസൈൻമെന്റുകൾ', stat_label_2: 'പരീക്ഷണങ്ങൾ', stat_label_3: 'സാങ്കേതിക വിദ്യകൾ',
    about_tag: 'കോഴ്സ് അവലോകനം', about_title: 'ഞാൻ പഠിച്ചത്',
    about_desc: 'ഡാറ്റ ഇൻജസ്ഷൻ മുതൽ വിതരണ ബുദ്ധിമത്ത വരെ ഡാറ്റ മാനേജ്‌മെന്റിന്റെ ആഴത്തിലുള്ള പഠനം.',
    about_card1_title: 'ഡാറ്റ എഞ്ചിനീയറിങ്', about_card1_desc: 'CSV, XML, HTML, ബൈനറി ഫോർമാറ്റുകളിൽ ഡാറ്റ ഇൻജസ്ഷൻ, SQL/NoSQL CRUD.',
    about_card2_title: 'ഫെഡറേറ്റഡ് ആർക്കിടെക്ചർ', about_card2_desc: 'വിതരണ ക്വറി പ്രോസസ്സിങ്, സ്കീമ ഹെറ്ററോജിനിറ്റി, CAP തിയറം.',
    about_card3_title: 'പര്യവേഷണ വിശകലനം', about_card3_desc: 'ഫീച്ചർ എഞ്ചിനീയറിങ്, കോറിലേഷൻ ഹീറ്റ്മാപ്പ്, ഇന്ത്യൻ ജല ഡാറ്റ വിശകലനം.',
    about_card4_title: 'മെഷീൻ ലേണിങ്', about_card4_desc: 'StandardScaler, ട്രെൻ-ടെസ്റ്റ് സ്പ്ലിറ്റ്, R² സ്കോർ ഉപയോഗിച്ച് ലീനിയർ റിഗ്രഷൻ.',
    assign_tag: 'പോർട്ട്ഫോളിയോ', assign_title: 'അസൈൻമെന്റ് ഷോകേസ്',
    assign_desc: 'പൂർണ്ണ റിപ്പോർട്ടും കോഡും കാണാൻ കാർഡിൽ ക്ലിക്ക് ചെയ്യുക.',
    card1_badge: 'ലാബ് 01', card1_title: 'ഡാറ്റാബേസ് & അനാലിസിസ് പൈപ്പ്ലൈൻ', card1_sub: 'സമഗ്ര ഡാറ്റ മാനേജ്മെന്റ്',
    card1_desc: 'ഒന്നിലധികം ഫോർമാറ്റ് ഡാറ്റ, NoSQL/SQL CRUD, EDA, ML മോഡൽ ഉൾക്കൊള്ളുന്ന ലാബ്.',
    card1_link: 'ലാബ് റിപ്പോർട്ടും കോഡും കാണുക →',
    card2_badge: 'തിയറി 01', card2_title: 'ഫെഡറേറ്റഡ് ഡാറ്റ മാനേജ്മെന്റ്', card2_sub: 'അക്കാദമിക് ഗവേഷണ റിപ്പോർട്ട്',
    card2_desc: 'ഫെഡറേറ്റഡ് ഡാറ്റ മാനേജ്മെന്റ് ഉൾക്കൊള്ളുന്ന പ്രൊഫഷണൽ ബുക്ക് ചാപ്റ്റർ.',
    card2_link: 'ഡിജിറ്റൽ റിപ്പോർട്ട് തുറക്കുക →',
    skills_tag: 'ടെക് സ്റ്റാക്ക്', skills_title: 'ഉപകരണങ്ങളും സാങ്കേതികവിദ്യകളും',
    footer_txt: '© 2026 ഡിസ്ട്രിബ്യൂട്ടഡ് ഡാറ്റ മാനേജ്മെന്റ് ഷോകേസ് · Stanzin Angmo ❤️',
  },
  gu: {
    dir: 'ltr', label: 'ગુજ',
    nav_home: 'હોમ', nav_about: 'વિશે', nav_assignments: 'સોંપણીઓ', nav_skills: 'કૌશલ્ય',
    hero_badge: 'એમ.ટેક · ડિસ્ટ્રિબ્યૂટેડ સિસ્ટમ્સ · 2026',
    hero_title_1: 'વિતરિત', hero_title_2: 'ડેટા વ્યવસ્થાપન',
    hero_subtitle: 'ડેટા પાર્સિંગ, વિતરિત ડેટાબેઝ અને ફેડરેટેડ ડેટા આર્કિટેક્ચરનો ઇન્ટરેક્ટિવ શોકેઝ.',
    btn_explore: 'સોંપણીઓ જુઓ', btn_github: 'GitHub પર જુઓ',
    stat_label_1: 'સોંપણીઓ', stat_label_2: 'પ્રયોગો', stat_label_3: 'ટેક્નોલોજી',
    about_tag: 'કોર્સ વિહંગાવલોકન', about_title: 'મેં શું શીખ્યું',
    about_desc: 'ડેટા ઇન્જેક્શનથી વિતરિત ઇન્ટેલિજન્સ સુધી ડેટા વ્યવસ્થાપનનો ઊંડો અભ્યાસ.',
    about_card1_title: 'ડેટા એન્જિનિયરિંગ', about_card1_desc: 'CSV, XML, HTML, બાઈનરી ફોર્મેટ અને SQL/NoSQL CRUD ઓપરેશન.',
    about_card2_title: 'ફેડરેટેડ આર્કિટેક્ચર', about_card2_desc: 'ડિસ્ટ્રિબ્યૂટેડ ક્વેરી, સ્કીમા વિષમતા અને CAP પ્રમેય.',
    about_card3_title: 'અન્વેષણ વિશ્લેષણ', about_card3_desc: 'ભારતીય જળ ડેટા પ્રી-પ્રોસેસિંગ અને સહસંબંધ હીટ-મેપ.',
    about_card4_title: 'મેશીન લર્નિંગ', about_card4_desc: 'StandardScaler અને R² સ્કોર સાથે LinearRegression મૉડેલ.',
    assign_tag: 'પોર્ટફોલિઓ', assign_title: 'સોંપણી શોકેઝ',
    assign_desc: 'સંપૂર્ણ રિપોર્ટ અને કોડ જોવા માટે કાર્ડ ક્લિક કરો.',
    card1_badge: 'લેબ 01', card1_title: 'ડેટાબેઝ અને વિશ્લેષણ પાઇપ-લાઇન', card1_sub: 'સંપૂર્ણ ડેટા વ્યવસ્થાપન',
    card1_desc: 'બહુ ફોર્મેટ ડેટા, NoSQL/SQL CRUD, EDA અને ML મૉડેલ.',
    card1_link: 'લેબ રિપોર્ટ અને કોડ જુઓ →',
    card2_badge: 'સિદ્ધાંત 01', card2_title: 'ફેડરેટેડ ડેટા વ્યવસ્થાપન', card2_sub: 'શૈક્ષણિક સંશોધન અહેવાલ',
    card2_desc: 'ફેડરેટેડ ડેટા મૅનેજ્મેન્ટ પ્રોફેશ્નલ પુસ્તક પ્રકરણ.',
    card2_link: 'ડિજિટલ રિપોર્ટ ખોલો →',
    skills_tag: 'ટેક સ્ટૅક', skills_title: 'ઉપકરણો અને ટેક્નોલોજી',
    footer_txt: '© 2026 વિતરિત ડેટા વ્યવસ્થાપન શોકેઝ · Stanzin Angmo ❤️',
  },
  bn: {
    dir: 'ltr', label: 'বাং',
    nav_home: 'হোম', nav_about: 'সম্পর্কে', nav_assignments: 'অ্যাসাইনমেন্ট', nav_skills: 'দক্ষতা',
    hero_badge: 'এম.টেক · বিতরণ ব্যবস্থা · ২০২৬',
    hero_title_1: 'বিতরণকৃত', hero_title_2: 'ডেটা ব্যবস্থাপনা',
    hero_subtitle: 'ডেটা পার্সিং, বিতরণকৃত ডেটাবেস এবং ফেডারেটেড ডেটা আর্কিটেকচারের একটি ইন্টারেক্টিভ শোকেস।',
    btn_explore: 'অ্যাসাইনমেন্ট দেখুন', btn_github: 'GitHub-এ দেখুন',
    stat_label_1: 'অ্যাসাইনমেন্ট', stat_label_2: 'পরীক্ষা-নিরীক্ষা', stat_label_3: 'প্রযুক্তি',
    about_tag: 'কোর্স সংক্ষিপ্ত', about_title: 'আমি যা শিখেছি',
    about_desc: 'ডেটা ইনজেকশন থেকে বিতরণকৃত বুদ্ধিমত্তা পর্যন্ত ডেটা ব্যবস্থাপনার গভীর অধ্যয়ন।',
    about_card1_title: 'ডেটা ইঞ্জিনিয়ারিং', about_card1_desc: 'CSV, XML, HTML, বাইনারি ফরম্যাট এবং SQL/NoSQL CRUD অপারেশন।',
    about_card2_title: 'ফেডারেটেড আর্কিটেকচার', about_card2_desc: 'বিতরণকৃত কোয়েরি প্রক্রিয়াকরণ এবং CAP উপপাদ্য।',
    about_card3_title: 'অনুসন্ধানমূলক বিশ্লেষণ', about_card3_desc: 'ভারতীয় জলসম্পদ ডেটার প্রি-প্রসেসিং ও কোরিলেশন হিটম্যাপ।',
    about_card4_title: 'মেশিন লার্নিং', about_card4_desc: 'StandardScaler ও R² স্কোর সহ LinearRegression মডেলিং।',
    assign_tag: 'পোর্টফোলিও', assign_title: 'অ্যাসাইনমেন্ট শোকেস',
    assign_desc: 'সম্পূর্ণ রিপোর্ট ও কোড দেখতে কার্ডে ক্লিক করুন।',
    card1_badge: 'ল্যাব ০১', card1_title: 'ডেটাবেস ও বিশ্লেষণ পাইপলাইন', card1_sub: 'সম্পূর্ণ ডেটা ব্যবস্থাপনা',
    card1_desc: 'একাধিক ফরম্যাট ডেটা, NoSQL/SQL CRUD, EDA ও ML মডেল।',
    card1_link: 'ল্যাব রিপোর্ট ও কোড দেখুন →',
    card2_badge: 'তত্ত্ব ০১', card2_title: 'ফেডারেটেড ডেটা ব্যবস্থাপনা', card2_sub: 'একাডেমিক গবেষণা প্রতিবেদন',
    card2_desc: 'ফেডারেটেড ডেটা ম্যানেজমেন্ট বিষয়ক পেশাদার বই অধ্যায়।',
    card2_link: 'ডিজিটাল রিপোর্ট খুলুন →',
    skills_tag: 'টেক স্ট্যাক', skills_title: 'সরঞ্জাম ও প্রযুক্তি',
    footer_txt: '© 2026 বিতরণকৃত ডেটা ব্যবস্থাপনা শোকেস · Stanzin Angmo ❤️',
  },
  ur: {
    dir: 'rtl', label: 'اردو',
    nav_home: 'ہوم', nav_about: 'ہمارے بارے میں', nav_assignments: 'اسائنمنٹ', nav_skills: 'مہارتیں',
    hero_badge: 'ایم.ٹیک · تقسیم شدہ نظام · 2026',
    hero_title_1: 'تقسیم شدہ', hero_title_2: 'ڈیٹا انتظام',
    hero_subtitle: 'ڈیٹا پارسنگ، تقسیم شدہ ڈیٹا بیس اور فیڈریٹڈ ڈیٹا آرکیٹیکچر کی ایک انٹرایکٹو نمائش۔',
    btn_explore: 'اسائنمنٹس دیکھیں', btn_github: 'GitHub پر دیکھیں',
    stat_label_1: 'اسائنمنٹس', stat_label_2: 'تجربات', stat_label_3: 'ٹیکنالوجیز',
    about_tag: 'کورس کا جائزہ', about_title: 'میں نے کیا سیکھا',
    about_desc: 'ڈیٹا انجیکشن سے تقسیم شدہ ذہانت تک ڈیٹا انتظام کا گہرا مطالعہ۔',
    about_card1_title: 'ڈیٹا انجینئرنگ', about_card1_desc: 'CSV, XML, HTML، بائنری فارمیٹس اور SQL/NoSQL CRUD آپریشنز۔',
    about_card2_title: 'فیڈریٹڈ آرکیٹیکچر', about_card2_desc: 'تقسیم شدہ کوئری پروسیسنگ، اسکیمہ ہیٹروجنیٹی اور CAP تھیوریم۔',
    about_card3_title: 'تلاشی تجزیہ', about_card3_desc: 'ہندوستانی آبی وسائل کے ڈیٹا کی پری-پروسیسنگ اور ہیٹ-میپ۔',
    about_card4_title: 'مشین لرننگ', about_card4_desc: 'StandardScaler اور R² اسکور کے ساتھ LinearRegression ماڈل۔',
    assign_tag: 'پورٹ فولیو', assign_title: 'اسائنمنٹس کی نمائش',
    assign_desc: 'مکمل رپورٹ اور کوڈ دیکھنے کے لیے کارڈ پر کلک کریں۔',
    card1_badge: 'لیب 01', card1_title: 'ڈیٹا بیس اور تجزیہ پائپ لائن', card1_sub: 'مکمل ڈیٹا انتظام',
    card1_desc: 'متعدد فارمیٹ ڈیٹا، NoSQL/SQL CRUD، EDA اور ML ماڈل۔',
    card1_link: 'لیب رپورٹ اور کوڈ دیکھیں →',
    card2_badge: 'نظریہ 01', card2_title: 'فیڈریٹڈ ڈیٹا انتظام', card2_sub: 'علمی تحقیقی رپورٹ',
    card2_desc: 'فیڈریٹڈ ڈیٹا مینجمنٹ پر پیشہ ورانہ کتابی باب۔',
    card2_link: 'ڈیجیٹل رپورٹ کھولیں →',
    skills_tag: 'ٹیک اسٹیک', skills_title: 'اوزار اور ٹیکنالوجیز',
    footer_txt: '© 2026 تقسیم شدہ ڈیٹا انتظام نمائش · Stanzin Angmo ❤️',
  }
};

// ── Language System ──
const LANG_STORE_KEY = 'ddm_lang';
let currentLang = localStorage.getItem(LANG_STORE_KEY) || 'en';

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem(LANG_STORE_KEY, lang);

  // Direction
  document.documentElement.dir = t.dir;
  document.documentElement.lang = lang;

  // Translate all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update lang button label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = t.label;

  // Mark active option
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Close dropdown
  const dd = document.getElementById('langDropdown');
  if (dd) dd.classList.remove('open');
}

function initLangSelector() {
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  if (!langBtn || !langDropdown) return;

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => langDropdown.classList.remove('open'));
  langDropdown.addEventListener('click', e => e.stopPropagation());

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage(currentLang);
}

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar?.classList.add('scrolled');
  else navbar?.classList.remove('scrolled');
});

// ── Active nav link ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) link.classList.add('active');
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ── Hamburger ──
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => navLinksEl?.classList.toggle('open'));

// ── Animate on scroll ──
const animObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      animObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('[data-animate]').forEach(el => animObs.observe(el));

// ── Skills animate ──
document.querySelectorAll('.skill-item').forEach((el, i) => {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setTimeout(() => el.classList.add('visible'), i * 60);
      obs.unobserve(el);
    }
  }, { threshold: 0.2 });
  obs.observe(el);
});

// ── Smooth anchors ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); navLinksEl?.classList.remove('open'); }
  });
});

// ── Stat counter ──
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const step = (ts) => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / 1800, 1);
    el.textContent = Math.floor((1 - Math.pow(1-p, 3)) * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  const nums = document.querySelectorAll('.stat-number');
  const targets = [2, 12, 5], suffixes = ['', '+', '+'];
  let done = false;
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !done) {
      done = true;
      nums.forEach((el, i) => animateCounter(el, targets[i], suffixes[i]));
    }
  }, { threshold: 0.5 }).observe(statsSection);
}

// ── Init on DOM ready ──
document.addEventListener('DOMContentLoaded', initLangSelector);
if (document.readyState !== 'loading') initLangSelector();
