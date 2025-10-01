// ==================================================================
//      ملف البيانات: يحتوي على بيانات جميع البطاقات في التطبيق
// ==================================================================

const cardData = [
    // --- البطاقة الأولى: الحاسب والبرمجة ---
    
    // --- البطاقة الثانية: كلية الأعمال (النسخة الشاملة والنهائية) ---
    
    // --- البطاقة الثانية: كلية الأعمال (النسخة النهائية الشاملة جداً +50 خدمة) ---
    {
        id: 'business_card',
        title: 'خدمات كلية الأعمال',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500',
        ratingText: '5.0 (150 تقييم )',
        deliveryText: 'تسليم: 1-7 أيام',
        priceText: 'اسعارنا مميزه',
        views: '12.5K',
        likes: 1500,
        whatsappLink: 'https://wa.me/966549225740?text=أريد طلب خدمة لطلاب كلية الأعمال',
        tags: ['محاسبة', 'تمويل', 'تسويق', 'نظم معلومات ', 'اقتصاد ', 'إدارة'],
        services: {
            title: "اخدمات كلية الأعمال",
            items: [
                // --- 1. قسم المحاسبة (Accounting ) ---
                { id: 'acc101_assignments', name: "تكاليف مبادئ المحاسبة", details: [ { icon: 'fas fa-book-open', title: 'حل الواجبات والتمارين', text: 'حل مسائل الدورة المحاسبية، القيود، الترحيل، وإعداد ميزان المراجعة.' } ], baseLikes: 450, baseRatingSum: 230, baseVotes: 48 },
                { id: 'acc_financial_statements', name: "مشاريع القوائم المالية", details: [ { icon: 'fas fa-file-invoice', title: 'إعداد القوائم المالية', text: 'إعداد قائمة الدخل، الميزانية العمومية، والتدفقات النقدية للحالات الدراسية.' } ], baseLikes: 420, baseRatingSum: 215, baseVotes: 44 },
                { id: 'acc_cost_assignments', name: "تكاليف محاسبة التكاليف", details: [ { icon: 'fas fa-calculator', title: 'حل مسائل التكاليف', text: 'حل تمارين تحليل الانحرافات، الموازنات، وتكاليف الأوامر والمراحل.' } ], baseLikes: 380, baseRatingSum: 195, baseVotes: 40 },
                { id: 'acc_managerial_assignments', name: "تكاليف المحاسبة الإدارية", details: [ { icon: 'fas fa-lightbulb', title: 'دعم اتخاذ القرار', text: 'حل مسائل تحليل التكاليف الملائمة لاتخاذ القرارات الإدارية (تسعير، إنتاج).' } ], baseLikes: 360, baseRatingSum: 185, baseVotes: 38 },
                { id: 'acc_intermediate_assignments', name: "تكاليف المحاسبة المتوسطة", details: [ { icon: 'fas fa-layer-group', title: 'حل مسائل متقدمة', text: 'حل تمارين تقييم المخزون، الأصول الثابتة، والاستثمارات قصيرة الأجل.' } ], baseLikes: 330, baseRatingSum: 170, baseVotes: 35 },
                { id: 'acc_advanced_projects', name: "مشاريع المحاسبة المتقدمة", details: [ { icon: 'fas fa-building', title: 'محاسبة اندماج الشركات', text: 'إعداد القوائم المالية الموحدة ومشاريع محاسبة الشركات التابعة.' } ], baseLikes: 310, baseRatingSum: 160, baseVotes: 33 },
                { id: 'acc_tax_assignments', name: "تكاليف محاسبة الزكاة والضريبة", details: [ { icon: 'fas fa-hand-holding-usd', title: 'حساب الزكاة والضريبة', text: 'حل مسائل حساب الوعاء الزكوي والضريبي للشركات والأفراد.' } ], baseLikes: 290, baseRatingSum: 150, baseVotes: 31 },

                // --- 2. قسم التمويل والاستثمار (Finance) ---
                { id: 'fin_corp_assignments', name: "تكاليف تمويل الشركات", details: [ { icon: 'fas fa-percentage', title: 'حل مسائل التمويل', text: 'حل واجبات تقييم المشاريع (NPV, IRR)، وحساب تكلفة رأس المال (WACC).' } ], baseLikes: 400, baseRatingSum: 210, baseVotes: 43 },
                { id: 'fin_corp_projects', name: "مشاريع تمويل الشركات", details: [ { icon: 'fas fa-file-invoice-dollar', title: 'تحليل مالي متقدم للشركات', text: 'إجراء تحليل مالي شامل باستخدام النسب المالية لتقييم أداء الشركات.' } ], baseLikes: 380, baseRatingSum: 200, baseVotes: 41 },
                { id: 'fin_investment_assignments', name: "تكاليف مبادئ الاستثمار", details: [ { icon: 'fas fa-seedling', title: 'حل مسائل الاستثمار', text: 'حل تمارين حساب العائد والمخاطرة، وتقييم الأسهم والسندات.' } ], baseLikes: 350, baseRatingSum: 180, baseVotes: 37 },
                { id: 'fin_portfolio_projects', name: "مشاريع المحافظ الاستثمارية", details: [ { icon: 'fas fa-chart-area', title: 'بناء وتحليل المحافظ', text: 'تحليل وتقييم الأوراق المالية لبناء محفظة استثمارية متنوعة وفعالة.' } ], baseLikes: 330, baseRatingSum: 170, baseVotes: 35 },
                { id: 'fin_derivatives_assignments', name: "تكاليف المشتقات المالية", details: [ { icon: 'fas fa-wave-square', title: 'حل مسائل المشتقات', text: 'حل تمارين ومسائل العقود الآجلة، الخيارات، والمقايضات.' } ], baseLikes: 280, baseRatingSum: 145, baseVotes: 30 },

                // --- 3. قسم التسويق (Marketing) ---
                { id: 'mkt_plan_projects', name: "مشاريع خطط التسويق", details: [ { icon: 'fas fa-map-signs', title: 'إعداد خطة تسويق متكاملة', text: 'بناء خطة تسويق شاملة (تحليل SWOT، تحديد الأهداف، المزيج التسويقي، الميزانية).' } ], baseLikes: 420, baseRatingSum: 225, baseVotes: 46 },
                { id: 'mkt_research_projects', name: "مشاريع بحوث التسويق", details: [ { icon: 'fas fa-search', title: 'إجراء بحث تسويقي', text: 'تصميم خطة بحث، جمع البيانات (استبيانات)، تحليلها، وتقديم تقرير النتائج.' } ], baseLikes: 390, baseRatingSum: 205, baseVotes: 42 },
                { id: 'mkt_consumer_behavior_assignments', name: "تكاليف سلوك المستهلك", details: [ { icon: 'fas fa-user-tag', title: 'تحليل سلوك المستهلك', text: 'حل واجبات تحليل العوامل المؤثرة على قرارات الشراء لدى المستهلكين.' } ], baseLikes: 340, baseRatingSum: 175, baseVotes: 36 },
                { id: 'mkt_digital_assignments', name: "تكاليف التسويق الرقمي", details: [ { icon: 'fab fa-google', title: 'تحليل حملات رقمية', text: 'حل واجبات تحليل أداء حملات التسويق عبر محركات البحث ووسائل التواصل.' } ], baseLikes: 360, baseRatingSum: 185, baseVotes: 38 },

                // --- 4. قسم الإدارة والموارد البشرية (Management & HR) ---
                { id: 'mgt_principles_assignments', name: "تكاليف مبادئ الإدارة", details: [ { icon: 'fas fa-users-cog', title: 'حل واجبات الإدارة', text: 'حل تمارين حول وظائف الإدارة (التخطيط، التنظيم، التوجيه، الرقابة).' } ], baseLikes: 400, baseRatingSum: 210, baseVotes: 43 },
                { id: 'mgt_ob_assignments', name: "تكاليف السلوك التنظيمي", details: [ { icon: 'fas fa-sitemap', title: 'تحليل السلوك في المنظمات', text: 'حل واجبات تحليل الثقافة التنظيمية، القيادة، والتحفيز.' } ], baseLikes: 350, baseRatingSum: 180, baseVotes: 37 },
                { id: 'mgt_hr_projects', name: "مشاريع إدارة الموارد البشرية", details: [ { icon: 'fas fa-user-plus', title: 'تخطيط الموارد البشرية', text: 'إعداد مشاريع حول تخطيط القوى العاملة، تحليل وتصميم الوظائف، وتقييم الأداء.' } ], baseLikes: 370, baseRatingSum: 190, baseVotes: 39 },
                { id: 'mgt_strategic_projects', name: "مشاريع الإدارة الاستراتيجية", details: [ { icon: 'fas fa-chess-king', title: 'تحليل استراتيجي للشركات', text: 'إجراء تحليل استراتيجي شامل (SWOT, PESTEL, Porter) لشركة حقيقية.' } ], baseLikes: 410, baseRatingSum: 220, baseVotes: 45 },

                // --- 5. قسم الاقتصاد (Economics) ---
                { id: 'eco_micro_assignments', name: "تكاليف الاقتصاد الجزئي", details: [ { icon: 'fas fa-store', title: 'حل مسائل الاقتصاد الجزئي', text: 'حل تمارين العرض والطلب، مرونة الأسعار، سلوك المستهلك، وهياكل السوق.' } ], baseLikes: 380, baseRatingSum: 195, baseVotes: 40 },
                { id: 'eco_macro_assignments', name: "تكاليف الاقتصاد الكلي", details: [ { icon: 'fas fa-landmark', title: 'حل مسائل الاقتصاد الكلي', text: 'حل تمارين الناتج المحلي الإجمالي، التضخم، البطالة، والسياسات النقدية والمالية.' } ], baseLikes: 380, baseRatingSum: 195, baseVotes: 40 },

                // --- 6. قسم نظم المعلومات الإدارية (MIS) ---
                { id: 'mis_assignments', name: "تكاليف نظم المعلومات الإدارية", details: [ { icon: 'fas fa-tasks', title: 'حل واجبات MIS', text: 'حل التكاليف المتعلقة بتحليل النظم، رسم مخططات (DFD, ERD)، وأمن المعلومات.' } ], baseLikes: 350, baseRatingSum: 180, baseVotes: 37 },
                { id: 'mis_erp_assignments', name: "تكاليف نظم تخطيط الموارد (ERP)", details: [ { icon: 'fas fa-industry', title: 'تحليل أنظمة ERP', text: 'حل واجبات حول فوائد وتحديات تطبيق أنظمة ERP في الشركات.' } ], baseLikes: 310, baseRatingSum: 160, baseVotes: 33 },

                // --- 7. قسم الإحصاء وتحليل البيانات (Statistics & Data Analysis) ---
                { id: 'stat_assignments', name: "تكاليف الإحصاء في الإدارة", details: [ { icon: 'fas fa-calculator', title: 'حل مسائل الإحصاء', text: 'حل تمارين الإحصاء الوصفي، التوزيعات الاحتمالية، وفترات الثقة.' } ], baseLikes: 400, baseRatingSum: 210, baseVotes: 43 },
                { id: 'stat_projects', name: "مشاريع الإحصاء", details: [ { icon: 'fas fa-chart-line', title: 'تطبيق النماذج الإحصائية', text: 'إجراء تحليل الارتباط والانحدار وتطبيق اختبارات الفرضيات على بيانات حقيقية.' } ], baseLikes: 380, baseRatingSum: 200, baseVotes: 41 },
                { id: 'spss_assignments', name: "تكاليف التحليل الإحصائي (SPSS)", details: [ { icon: 'fas fa-poll', title: 'تحليل بيانات الاستبيانات', text: 'إجراء التحليلات الإحصائية لبيانات أبحاث السوق والموظفين باستخدام SPSS.' } ], baseLikes: 420, baseRatingSum: 225, baseVotes: 46 },
                { id: 'paper_questionnaires', name: "تصميم الاستبيانات الورقية", details: [ { icon: 'fas fa-file-alt', title: 'تصميم استبيان للطباعة', text: 'تصميم استبيان احترافي جاهز للطباعة والتوزيع اليدوي.' } ], baseLikes: 320, baseRatingSum: 165, baseVotes: 34 },
                { id: 'online_questionnaires', name: "تصميم الاستبيانات الإلكترونية", details: [ { icon: 'fab fa-google-drive', title: 'بناء استبيان إلكتروني', text: 'بناء الاستبيان باستخدام Google Forms أو SurveyMonkey وتوزيعه عبر الإنترنت.' } ], baseLikes: 400, baseRatingSum: 210, baseVotes: 43 },

                // --- 8. قسم مهارات الأعمال (Business Skills) ---
                { id: 'excel_projects', name: "مشاريع الإكسل", details: [ { icon: 'fas fa-project-diagram', title: 'تنفيذ مشاريع Excel', text: 'بناء مشاريع متكاملة في الإكسل تشمل تحليل البيانات، النمذجة المالية، وإدارة المخزون.' } ], baseLikes: 480, baseRatingSum: 250, baseVotes: 50 },
                { id: 'excel_sheets', name: "تصميم شيتات الإكسل", details: [ { icon: 'fas fa-table', title: 'بناء شيتات احترافية', text: 'تصميم وبناء جداول بيانات (شيتات) مخصصة باستخدام الدوال المتقدمة والتنسيق الشرطي.' } ], baseLikes: 460, baseRatingSum: 240, baseVotes: 48 },
                { id: 'excel_reports', name: "إعداد تقارير الإكسل", details: [ { icon: 'fas fa-file-chart-pie', title: 'إنشاء تقارير ديناميكية', text: 'إنشاء تقارير تفاعلية باستخدام الجداول المحورية (Pivot Tables) والرسوم البيانية.' } ], baseLikes: 440, baseRatingSum: 230, baseVotes: 46 },
                { id: 'dashboard_projects', name: "مشاريع الداشبورد (لوحات المعلومات)", details: [ { icon: 'fas fa-tachometer-alt', title: 'تصميم داشبورد تفاعلي', text: 'تصميم لوحات معلومات احترافية لعرض مؤشرات الأداء الرئيسية (KPIs) بشكل جذاب.' } ], baseLikes: 450, baseRatingSum: 235, baseVotes: 47 },
                { id: 'powerpoint_presentations', name: "عروض تقديمية احترافية (PowerPoint)", details: [ { icon: 'fas fa-file-powerpoint', title: 'تصميم عروض للمشاريع', text: 'تصميم عروض تقديمية جذابة لعرض نتائج المشاريع والمناقشات.' } ], baseLikes: 430, baseRatingSum: 225, baseVotes: 45 },

                // --- 9. قسم المشاريع والبحوث المتقدمة ---
                { id: 'feasibility_study_projects', name: "مشاريع دراسات الجدوى", details: [ { icon: 'fas fa-chart-bar', title: 'إعداد دراسة جدوى متكاملة', text: 'تحليل السوق، الدراسة المالية والفنية، وتقديم تقرير شامل للمشروع.' } ], baseLikes: 470, baseRatingSum: 245, baseVotes: 49 },
                { id: 'case_study_projects', name: "مشاريع تحليل دراسات الحالة", details: [ { icon: 'fas fa-book-reader', title: 'تطبيق النظريات الإدارية', text: 'استخدام نماذج مثل SWOT و Porter\'s Five Forces لتحليل الحالات واقتراح حلول عملية.' } ], baseLikes: 390, baseRatingSum: 205, baseVotes: 41 },
                { id: 'graduation_projects_business', name: "مشاريع التخرج (إدارة وأعمال)", details: [ { icon: 'fas fa-graduation-cap', title: 'إعداد مشروع تخرج كامل', text: 'المساعدة في جميع مراحل مشروع التخرج، من اختيار الفكرة إلى التحليل والتسليم.' } ], baseLikes: 500, baseRatingSum: 260, baseVotes: 52 },
                { id: 'coop_reports', name: "تقارير التدريب التعاوني", details: [ { icon: 'fas fa-briefcase', title: 'إعداد تقارير التدريب', text: 'إعداد تقارير التدريب وفقاً للمعايير الأكاديمية، مع التركيز على إبراز المهارات المكتسبة.' } ], baseLikes: 440, baseRatingSum: 230, baseVotes: 46 },
                { id: 'business_research_papers', name: "إعداد الأبحاث العلمية", details: [ { icon: 'fas fa-feather-alt', title: 'كتابة أبحاث محكّمة', text: 'المساعدة في كتابة الأوراق البحثية للنشر في المجلات العلمية والمؤتمرات.' } ], baseLikes: 400, baseRatingSum: 210, baseVotes: 42 }
            ]
        }
    },

    // --- البطاقة الثانية: كلية الأعمال ---
    
    // --- البطاقة الثالثة: الكتابة الأكاديمية ---
    {
        id: 'academic_writing_card',
        title: 'الكتابة الأكاديمية',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500',
        ratingText: '4.9 (45 تقييم )',
        deliveryText: 'تسليم: 3-10 أيام',
        priceText: 'اسعارنا مميزة ',
        views: '4.2K',
        likes: 520,
        whatsappLink: 'https://wa.me/966549225740?text=أريد طلب خدمة في مجال الكتابة الأكاديمية',
        tags: ['بحوث فصلية', 'بحوث تخرج', 'مشاريع تخرج', 'ترجمة', 'تفريغ صوتي', 'مقالات'],
        services: {
            title: "خدمات الكتابة الأكاديمية والبحثية",
            items: [
                { 
                    id: 'term_papers', 
                    name: "إعداد البحوث الفصلية والواجبات", 
                    details: [
                        { icon: 'fas fa-book', title: 'بحث منهجي', text: 'إعداد بحوث قصيرة وواجبات فصلية وفقاً للمعايير الأكاديمية، مع توثيق المصادر والمراجع.' },
                        { icon: 'fas fa-check-double', title: 'أصالة وموثوقية', text: 'نضمن كتابة محتوى أصيل وخالٍ من الانتحال، مع فحص نسبة الاقتباس لضمان الجودة.' }
                    ],
                    baseLikes: 210, baseRatingSum: 115, baseVotes: 24 
                },
                { 
                    id: 'graduation_research', 
                    name: "المساعدة في بحوث التخرج", 
                    details: [
                        { icon: 'fas fa-graduation-cap', title: 'خطة بحث متكاملة', text: 'المساعدة في بناء خطة البحث (Proposal )، تحديد المشكلة، وصياغة الفرضيات والأسئلة.' },
                        { icon: 'fas fa-book-reader', title: 'الإطار النظري والدراسات السابقة', text: 'إجراء مراجعة شاملة للأدبيات السابقة وتلخيصها لبناء إطار نظري قوي للبحث.' },
                        { icon: 'fas fa-pen-nib', title: 'كتابة ومناقشة النتائج', text: 'المساعدة في كتابة فصول البحث وتحليل النتائج ومناقشتها وربطها بالدراسات السابقة.' }
                    ],
                    baseLikes: 350, baseRatingSum: 190, baseVotes: 40 
                },
                { 
                    id: 'academic_translation', 
                    name: "الترجمة الأكاديمية", 
                    details: [
                        { icon: 'fas fa-language', title: 'ترجمة متخصصة', text: 'ترجمة دقيقة للأبحاث والملخصات والمقالات من الإنجليزية إلى العربية والعكس، مع الحفاظ على المصطلحات العلمية.' },
                        { icon: 'fas fa-spell-check', title: 'تدقيق لغوي للمترجمات', text: 'مراجعة النصوص المترجمة لغوياً وإملائياً لضمان أعلى مستويات الجودة والدقة.' }
                    ],
                    baseLikes: 180, baseRatingSum: 95, baseVotes: 20
                },
                { 
                    id: 'audio_transcription', 
                    name: "التفريغ الصوتي (Transcription)", 
                    details: [
                        { icon: 'fas fa-headphones-alt', title: 'تفريغ دقيق للمقابلات', text: 'تفريغ المقابلات الصوتية ومجموعات التركيز (Focus Groups) المستخدمة في البحوث النوعية بشكل نصي دقيق.' },
                        { icon: 'fas fa-file-word', title: 'تنسيق احترافي', text: 'تسليم الملفات المفرغة بتنسيق Word منظم، مع إمكانية إضافة الطوابع الزمنية (Timestamps) حسب الطلب.' }
                    ],
                    baseLikes: 165, baseRatingSum: 80, baseVotes: 17
                },
                { 
                    id: 'article_writing', 
                    name: "كتابة المقالات والمحتوى", 
                    details: [
                        { icon: 'far fa-newspaper', title: 'مقالات متوافقة مع SEO', text: 'كتابة مقالات حصرية لمواقع الويب والمدونات مع مراعاة قواعد تحسين محركات البحث (SEO).' },
                        { icon: 'fas fa-lightbulb', title: 'محتوى إبداعي', text: 'صياغة محتوى إبداعي وجذاب لمختلف المنصات الرقمية بما يتناسب مع الجمهور المستهدف.' }
                    ],
                    baseLikes: 195, baseRatingSum: 105, baseVotes: 22
                }
            ]
        }
    },

    // --- البطاقة الرابعة: التصميم والعروض ---
    {
        id: 'design_presentations_card',
        title: 'التصميم والعروض',
        image: 'https://images.unsplash.com/photo-1572044162444-24c9562b5333?w=500',
        ratingText: '4.8 (38 تقييم )',
        deliveryText: 'تسليم: 2-5 أيام',
        priceText: 'اسعارنا مميزه',
        views: '3.5K',
        likes: 480,
        whatsappLink: 'https://wa.me/966549225740?text=أريد طلب خدمة في مجال التصميم',
        tags: ['PowerPoint', 'خرائط ذهنية', 'بوسترات', 'كروت أعمال', 'رسوم متحركة', 'Illustrator'],
        services: {
            title: "خدمات التصميم الإبداعي والعروض التقديمية",
            items: [
                { 
                    id: 'powerpoint_design', 
                    name: "تصميم عروض PowerPoint احترافية", 
                    details: [
                        { icon: 'fas fa-file-powerpoint', title: 'قوالب عصرية وجذابة', text: 'تصميم عروض تقديمية فريدة باستخدام قوالب حديثة وهوية بصرية متناسقة تعكس محتواك.' },
                        { icon: 'fas fa-chart-pie', title: 'إنفوجرافيك وحركات متقدمة', text: 'تحويل البيانات المعقدة إلى رسوم بيانية (إنفوجرافيك ) جذابة، مع إضافة حركات احترافية وسلسة.' }
                    ],
                    baseLikes: 290, baseRatingSum: 155, baseVotes: 32
                },
                { 
                    id: 'mind_map_design', 
                    name: "تصميم الخرائط الذهنية (Mind Maps)", 
                    details: [
                        { icon: 'fas fa-brain', title: 'تلخيص مرئي للمعلومات', text: 'تحويل المحاضرات والأفكار المعقدة إلى خرائط ذهنية منظمة وملونة تسهل الحفظ والمراجعة.' },
                        { icon: 'fas fa-palette', title: 'تصاميم إبداعية ومخصصة', text: 'إنشاء خرائط ذهنية بتصاميم جذابة، مع إمكانية تخصيص الألوان والأيقونات لتناسب هويتك.' }
                    ],
                    baseLikes: 190, baseRatingSum: 100, baseVotes: 21
                },
                { 
                    id: 'poster_design', 
                    name: "تصميم البوسترات العلمية والإعلانية", 
                    details: [
                        { icon: 'fas fa-paint-roller', title: 'بوسترات علمية للمؤتمرات', text: 'تصميم بوسترات علمية (Scientific Posters) لعرض نتائج الأبحاث في المؤتمرات والفعاليات الأكاديمية.' },
                        { icon: 'fas fa-bullhorn', title: 'بوسترات إعلانية للسوشيال ميديا', text: 'تصميم بوسترات جذابة لمنصات التواصل الاجتماعي (انستغرام، تويتر) تزيد من تفاعل الجمهور.' }
                    ],
                    baseLikes: 250, baseRatingSum: 130, baseVotes: 27
                },
                { 
                    id: 'business_card_design', 
                    name: "تصميم كروت الأعمال (Business Cards)", 
                    details: [
                        { icon: 'fas fa-id-card', title: 'تصاميم فريدة واحترافية', text: 'تصميم كروت أعمال تعكس هويتك المهنية أو التجارية بشكل أنيق ومميز.' },
                        { icon: 'fas fa-print', title: 'ملفات جاهزة للطباعة', text: 'تسليم ملفات التصميم بجودة عالية وبصيغ جاهزة لإرسالها إلى المطبعة مباشرة.' }
                    ],
                    baseLikes: 220, baseRatingSum: 110, baseVotes: 23
                },
                { 
                    id: 'motion_graphics', 
                    name: "تصميم رسوم متحركة (Motion Graphics)", 
                    details: [
                        { icon: 'fas fa-video', title: 'فيديوهات شرح قصيرة', text: 'إنشاء فيديوهات رسوم متحركة قصيرة (Explainer Videos) لتبسيط فكرة أو شرح خدمة بشكل جذاب.' },
                        { icon: 'fas fa-play-circle', title: 'مقدمات (Intros) وشعارات متحركة', text: 'تصميم مقدمات احترافية لقنوات اليوتيوب أو تحريك الشعارات (Logo Animation).' }
                    ],
                    baseLikes: 310, baseRatingSum: 170, baseVotes: 35
                },
                { 
                    id: 'illustrator_graphics', 
                    name: "رسومات وتصاميم Illustrator", 
                    details: [
                        { icon: 'fas fa-vector-square', title: 'تصميم أيقونات ورسومات Vector', text: 'رسم أيقونات وشخصيات ورسومات فيكتور (Vector) مخصصة يمكن تكبيرها لأي حجم دون فقدان الجودة.' },
                        { icon: 'fas fa-pencil-ruler', title: 'تحويل الصور إلى رسومات', text: 'تحويل الصور الفوتوغرافية إلى رسومات فنية أو كرتونية باستخدام برنامج Adobe Illustrator.' }
                    ],
                    baseLikes: 275, baseRatingSum: 145, baseVotes: 29
                }
            ]
        }
    },


    // --- البطاقة الخامسة: الخدمات المهنية والتطوير ---
    {
        id: 'career_services_card',
        title: 'الخدمات المهنية والتطوير',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500',
        ratingText: '5.0 (52 تقييم )',
        deliveryText: 'تسليم: 1-4 أيام',
        priceText: 'اسعارنا مميزه',
        
        views: '5.1K',
        likes: 615,
        whatsappLink: 'https://wa.me/966549225740?text=أريد طلب خدمة في مجال التطوير المهني',
        tags: ['سيرة ذاتية', 'تقارير تدريب', 'خطاب تقديم', 'LinkedIn', 'شهادات مهنية', 'مشاريع تدريب'],
        services: {
            title: "خدمات الإعداد المهني وسوق العمل",
            items: [
                { 
                    id: 'cv_cover_letter', 
                    name: "كتابة السير الذاتية وخطابات التقديم", 
                    details: [
                        { icon: 'fas fa-user-tie', title: 'سيرة ذاتية احترافية (ATS-Friendly )', text: 'تصميم وكتابة سيرة ذاتية مخصصة للوظيفة المستهدفة ومتوافقة مع أنظمة تتبع المتقدمين (ATS).' },
                        { icon: 'fas fa-file-signature', title: 'خطاب تقديم مؤثر (Cover Letter)', text: 'صياغة خطاب تقديم مقنع يبرز شغفك وخبراتك وارتباطها بالوظيفة الشاغرة.' }
                    ],
                    baseLikes: 350, baseRatingSum: 180, baseVotes: 36
                },
                { 
                    id: 'coop_reports_projects', 
                    name: "تقارير ومشاريع التدريب التعاوني", 
                    details: [
                        { icon: 'fas fa-briefcase', title: 'تقارير تدريب متكاملة', text: 'إعداد تقارير التدريب التعاوني أو الصيفي وفقاً للمعايير الأكاديمية، مع التركيز على إبراز المهارات المكتسبة.' },
                        { icon: 'fas fa-project-diagram', title: 'مشاريع تطبيقية للتدريب', text: 'المساعدة في تنفيذ المشاريع العملية المطلوبة خلال فترة التدريب، من التخطيط إلى التسليم.' }
                    ],
                    baseLikes: 280, baseRatingSum: 150, baseVotes: 30
                },
                { 
                    id: 'linkedin_improvement', 
                    name: "تحسين وتطوير حساب LinkedIn", 
                    details: [
                        { icon: 'fab fa-linkedin', title: 'ملف شخصي احترافي', text: 'إعادة كتابة وتنسيق ملفك الشخصي على LinkedIn بالكامل، من العنوان إلى الخبرات، لجعله جذاباً لمسؤولي التوظيف.' },
                        { icon: 'fas fa-star', title: 'إبراز المهارات والتوصيات', text: 'المساعدة في إبراز أهم المهارات والحصول على توصيات لزيادة مصداقية حسابك.' }
                    ],
                    baseLikes: 310, baseRatingSum: 165, baseVotes: 33
                },
                { 
                    id: 'cert_application', 
                    name: "المساعدة في التقديم على الشهادات المهنية", 
                    details: [
                        { icon: 'fas fa-certificate', title: 'تجهيز متطلبات التقديم', text: 'المساعدة في فهم وتجهيز كافة المستندات والمتطلبات اللازمة للتقديم على الشهادات المهنية (مثل PMP, SOCPA).' },
                        { icon: 'fas fa-file-import', title: 'تعبئة نماذج التقديم', text: 'مراجعة وتعبئة نماذج التقديم الإلكترونية بدقة لضمان قبول طلبك من المرة الأولى.' }
                    ],
                    baseLikes: 240, baseRatingSum: 125, baseVotes: 25
                }
            ]
        }
    }
];
