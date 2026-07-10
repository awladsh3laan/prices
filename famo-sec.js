// =============================================
// 🔐 ملف الأمان - FAMO SEC
// =============================================

// ===== Firebase Config =====
const firebaseConfig = {
  apiKey: "AIzaSyCKHRq7Bl6JQxXdWajIZBgch3TcHhzvI1g",
  authDomain: "price-famo-app.firebaseapp.com",
  databaseURL: "https://price-famo-app-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "price-famo-app",
  storageBucket: "price-famo-app.firebasestorage.app",
  messagingSenderId: "1077937125055",
  appId: "1:1077937125055:web:03c9e3192ad5233e98b80a"
};

// ===== IMGBB API Key =====
const IMGBB_API_KEY = "529020c488a5d77fa67a479c889e6b7e";

// ===== Super Admin Data =====
const SUPER_ADMIN = {
  uid: "5sAELDBWi5VbIukIgVgL7CRBzH32",
  email: "famo@admin.net",
  name: "mostafa",
  imageUrl: "https://i.ibb.co/HLKqRgtK/Picsart-26-06-02-06-55-02-557.png",
  role: "super_admin"
};

// =============================================
// 📦 البيانات الافتراضية (Default Data)
// =============================================

// ===== المنتجات (221 منتج) =====
const DEFAULT_PRODUCTS = [
  { id: 1, name: "اوكسي اوتوماتيك كيلو ٢.٥", qty: 2, wholesale: 188, retail: "٢٠٠ - ٢١٠" },
  { id: 2, name: "اوكسي اوتوماتيك ٢.٥ كيلو + ٤٠٠ جم", qty: 2, wholesale: 205, retail: "٢٣٠" },
  { id: 3, name: "برسيل اوتوماتيك كيلو ٢.٥", qty: 2, wholesale: 192, retail: "٢١٠" },
  { id: 4, name: "اريال اوتوماتيك ٢.٥ كيلو", qty: 2, wholesale: 215, retail: "٢٤٠" },
  { id: 5, name: "تايد اوتوماتيك كيلو ٢.٥", qty: 2, wholesale: 180, retail: "١٩٥" },
  { id: 6, name: "باهي اوتوماتيك كيلو ٢.٥ + ٣٠٠ جم", qty: 1, wholesale: 160, retail: "١٧٥" },
  { id: 7, name: " عرض صابون ديتول - ١٦٥ جم ٤ صابونة", qty: 4, wholesale: 150, retail: "٤٠ - ٤٢" },
  { id: 8, name: "عرض صابون ديتول ١١٠ جم - ٤ صابونة", qty: 2, wholesale: 107, retail: "٣٠" },
  { id: 9, name: "بالة مناديل بابيا سحب ٥٠٠ منديل", qty: 1, wholesale: 560, retail: "٣٥" },
  { id: 10, name: "بالة مناديل قطونيل سحب ٥٢٥ منديل", qty: 1, wholesale: 385, retail: "٢٥" },
  { id: 11, name: "بالة مناديل فاميليا سحب ٥٠٠ منديل", qty: 1, wholesale: 475, retail: "٣٠" },
  { id: 12, name: "بالة فاميليا رول ٦ مطبخ اخضر", qty: 1, wholesale: 260, retail: "٧٠ - ٧٥" },
  { id: 13, name: "بالة فاميليا ٦ رول مطبخ ازرق", qty: 1, wholesale: 230, retail: "٦٥" },
  { id: 14, name: "بالة فاين ٦ رول مطبخ اخضر", qty: 1, wholesale: 255, retail: " ٧٠" },
  { id: 15, name: "بالة زينة ٦ رول مطبخ", qty: 1, wholesale: 245, retail: "٦٥" },
  { id: 16, name: "بالة فاين دويتو تواليت", qty: 1, wholesale: 350, retail: "٧٠" },
  { id: 17, name: "بالة فاين تواليت ۲ رول", qty: 1, wholesale: 195, retail: "٢٥ - ٣٠" },
  { id: 18, name: "اريال اوتوماتيك كيلو ٩", qty: 1, wholesale: 530, retail: "٥٥٠" },
  { id: 19, name: "اوكسي اوتوماتيك كيلو ٩", qty: 1, wholesale: 515, retail: "٥٣٠" },
  { id: 20, name: "باهي اوتوماتيك كيلو ٩", qty: 1, wholesale: 465, retail: "٤٨٠" },
  { id: 21, name: "تايد اوتوماتيك كيلو ٩", qty: 1, wholesale: 475, retail: "٤٩٠" },
  { id: 22, name: "بونكس اوتوماتيك كيلو ٩", qty: 1, wholesale: 415, retail: "٤٣٠" },
  { id: 23, name: "برسيل اوتوماتيك كيلو ١٠", qty: 1, wholesale: 600, retail: "٦٢٠" },
  { id: 24, name: "معطر جو بخاخ فريدة ٤٦٠ مل", qty: 2, wholesale: 653, retail: "٦٠" },
  { id: 25, name: "عرض مناديل سمایل اصفر", qty: 3, wholesale: 43, retail: "٥٠" },
  { id: 26, name: "چركن فيبا ٤ كيلو", qty: 2, wholesale: 142.5, retail: "١٥٥ - ١٦٠" },
  { id: 27, name: "چركن فيبا ٤ كيلو + ٦٠٠ جم هدية", qty: 2, wholesale: 163, retail: "١٧٠" },
  { id: 28, name: "چركن فيبا ٣ كيلو", qty: 2, wholesale: 117, retail: "١٢٥" },
  { id: 29, name: "كرتونة اوكسي منظف اطباق سايل ٦٠٠ مل", qty: 1, wholesale: 308, retail: "٢٨" },
  { id: 30, name: "كرتونة اوكسي منظف اطباق سايل لتر ۱", qty: 1, wholesale: 460, retail: "٧٠" },
  { id: 31, name: "كرتونة بريل منظف اطباق ٦٠٠ مل", qty: 1, wholesale: 366, retail: "٣٣" },
  { id: 32, name: "كرتونة بريل التر صاروخ", qty: 1, wholesale: 585, retail: "٧٠" },
  { id: 33, name: "برطمان اللهلوبة متعدد الاغراض", qty: 1, wholesale: 244, retail: "٥٠" },
  { id: 34, name: "باور مزيل الدهون", qty: 6, wholesale: 44, retail: "٥٠" },
  { id: 35, name: "لاستر مزيل دهون", qty: 6, wholesale: 75, retail: "٨٥" },
  { id: 36, name: "زجاجة شامبو سجاد فايتر فلاش", qty: 4, wholesale: 65, retail: "٧٥" },
  { id: 37, name: "زجاجة مسلك بالوعات فايتر فلاش", qty: 3, wholesale: 65, retail: "٧٥" },
  { id: 38, name: "فايتر فلاش مزيل الدهون متعدد الاغراض", qty: 6, wholesale: 65, retail: "٧٥" },
  { id: 39, name: "زجاجة معطر ارضية فريدا هووم ٤٨٠ مل", qty: 1, wholesale: 242, retail: "٥٠" },
  { id: 40, name: "شاور جل دوش ٦٠٠ مل", qty: 4, wholesale: 52, retail: "٦٠ - ٦٥" },
  { id: 41, name: "شاور جل دوش ١ لتر", qty: 4, wholesale: 80, retail: "٩٥" },
  { id: 42, name: "شاور جل فريدا ٦٥٠ مل", qty: 8, wholesale: 80, retail: "٩٠ - ٩٥" },
  { id: 43, name: "شاور جل فريدة ١.٢ لتر", qty: 9, wholesale: 135, retail: "١٤٥ - ١٥٠" },
  { id: 44, name: "غسول الأيدين هاند ووش ريفولي", qty: 2, wholesale: 58, retail: "٦٥ - ٧٠" },
  { id: 45, name: "غسول الأيدين هاند ووش فريدا عرض", qty: 4, wholesale: 82, retail: "-" },
  { id: 46, name: "چركن فريدا داوني لتر ۲", qty: 4, wholesale: 85, retail: "٩٠ - ٩٥" },
  { id: 47, name: "چركن فريدا داوني لتر ٤", qty: 4, wholesale: 140, retail: "١٥٠ - ١٦٠" },
  { id: 48, name: "فريدا فلور مطهر ومعطر ارضيات لتر ۲", qty: 2, wholesale: 87, retail: "٩٥" },
  { id: 49, name: "كرتونة باهي جل الوان ٥ جنيه", qty: 2, wholesale: 77, retail: "٥" },
  { id: 50, name: "كرتونة برسيل جل ٥ جنيه", qty: 2, wholesale: 80, retail: "٥" },
  { id: 51, name: "كرتونة برسيل جل اسود ٣ جنيه", qty: 2, wholesale: 95, retail: "٣" },
  { id: 52, name: "كرتونة برسيل جل ١٠ جنيه", qty: 1, wholesale: 105, retail: "١٠" },
  { id: 53, name: "دستة مورال ملمع أثاث", qty: 1, wholesale: 550, retail: "٦٠" },
  { id: 54, name: "باهي ٥ جنيه", qty: 2, wholesale: 102, retail: "٥" },
  { id: 55, name: "كرتونة باهي ١٠ جنيه", qty: 2, wholesale: 103, retail: "١٠" },
  { id: 56, name: "كرتونة باهي ١٥ جنيه", qty: 2, wholesale: 105, retail: "١٥" },
  { id: 57, name: "كرتونة باهي ٢٠ جنيه", qty: 2, wholesale: 140, retail: "٢٠" },
  { id: 58, name: "كرتونة باهي ٢٥ جنيه", qty: 2, wholesale: 130, retail: "-" },
  { id: 59, name: "كرتونة باهي كيلو ١", qty: 1, wholesale: 255, retail: "٧٠" },
  { id: 60, name: "كرتونة باهي كيلو ١.٥", qty: 1, wholesale: 300, retail: "٩٥ - ١٠٠" },
  { id: 61, name: "كرتونة باهي كيلو ٢", qty: 1, wholesale: 490, retail: "١٢٥" },
  { id: 62, name: "كرتونة اوكسي ٥ جنيه", qty: 2, wholesale: 140, retail: "٥" },
  { id: 63, name: "كرتونة اوكسي ١٠ جنيه", qty: 2, wholesale: 220, retail: "١٠" },
  { id: 64, name: "كرتونة اوكسي ١٥ جنيه", qty: 2, wholesale: 160, retail: "١٥" },
  { id: 65, name: "كرتونة اوكسي ٢٠ جنيه", qty: 2, wholesale: 146, retail: "٢٠" },
  { id: 66, name: "كرتونة اوكسي ٢٥ جنيه", qty: 2, wholesale: 184, retail: "٢٥" },
  { id: 67, name: "كرتونة اوكسي كيلو ١", qty: 1, wholesale: 440, retail: "٨٠" },
  { id: 68, name: "كرتونة اوكسي ١.٥ كيلو", qty: 1, wholesale: 430, retail: "١٢٠ - ١٢٥" },
  { id: 69, name: "كرتونة اوكسي ٢ كيلو", qty: 1, wholesale: 555, retail: "١٤٥" },
  { id: 70, name: "كرتونة اريال ١٠ جنيه", qty: 2, wholesale: 140, retail: "١٠" },
  { id: 71, name: "كرتونة اريال ٣٠ جنيه", qty: 1, wholesale: 147, retail: "٣٠" },
  { id: 72, name: "شكارة فل 9 كجم", qty: 1, wholesale: 218, retail: "٢٧ للكيلو / ٢٣٥ شيكارة" },
  { id: 73, name: "كرتونة اريال ٥ جنيه", qty: 2, wholesale: 103, retail: "٥" },
  { id: 74, name: "كرتونة ليندو ٥ جنيه", qty: 2, wholesale: 102, retail: "٥" },
  { id: 75, name: "كرتونة ليندو ١٠ جنيه", qty: 2, wholesale: 102, retail: "١٠" },
  { id: 76, name: "كرتونة ليندو كيلو ١", qty: 1, wholesale: 252, retail: "٧٠" },
  { id: 77, name: "كرتونة ليندو كيلو ٢", qty: 2, wholesale: 470, retail: "١٢٥" },
  { id: 78, name: "كلوركس ظرف ١٠ جنيه ابيض", qty: 1, wholesale: 220, retail: "١٠" },
  { id: 79, name: "كرتونة كلوركس ظرف ١٠ جنيه الوان", qty: 1, wholesale: 220, retail: "١٠" },
  { id: 80, name: "كرتونة فلاش الهلال", qty: 1, wholesale: 80, retail: "١٠" },
  { id: 81, name: "فانيش سائل مزيل بقع ٤٠ جم", qty: 1, wholesale: 330, retail: "١٥" },
  { id: 82, name: "فانيش بودر مزيل بقع", qty: 1, wholesale: 270, retail: "١٥" },
  { id: 83, name: "فانيش سائل مزيل بقع 100 جم", qty: 1, wholesale: 640, retail: "٣٣" },
  { id: 84, name: "علبة بريكس بودر مزيل بقع", qty: 2, wholesale: 85, retail: "٥" },
  { id: 85, name: "كرتونة صابون سافانا كلاسيك", qty: 1, wholesale: 700, retail: "١٧" },
  { id: 86, name: "كرتونة صابون رويال", qty: 1, wholesale: 750, retail: "١٨ - ١٩" },
  { id: 87, name: "كرتونة صابون ريفولي", qty: 1, wholesale: 625, retail: "١٥" },
  { id: 88, name: "كرتونة صابون جوي", qty: 1, wholesale: 625, retail: "١٥" },
  { id: 89, name: "كرتونة صابون انجلش", qty: 2, wholesale: 750, retail: "١٨" },
  { id: 90, name: "كرتونة صابون لوكس", qty: 1, wholesale: 860, retail: "٢٠" },
  { id: 91, name: "كرتونة صابون دوش ٦٠ جم", qty: 1, wholesale: 310, retail: "٨" },
  { id: 92, name: "كرتونة صابون دوش", qty: 1, wholesale: 565, retail: "١٤" },
  { id: 93, name: "كرتونة صابون كامي", qty: 1, wholesale: 830, retail: "٢٠" },
  { id: 94, name: "دستة مبيد حشري نيو بيرسول ٣٠٠ مل", qty: 1, wholesale: 575, retail: "٥٠ - ٥٥" },
  { id: 95, name: "دستة مبيد حشرات طائرة راجون ٣٠٠ مل", qty: 1, wholesale: 470, retail: "٤٥" },
  { id: 96, name: "كرتونة ماكس كيلر مبيد حشرات زاحفة", qty: 1, wholesale: 375, retail: "٣٥ - ٤٠" },
  { id: 97, name: "كرتونة مبيد حشري لعنة الفراعنة", qty: 1, wholesale: 240, retail: "٢٥" },
  { id: 98, name: "كرتونة برسيل ٥ جنيه", qty: 2, wholesale: 103, retail: "٥" },
  { id: 99, name: "كرتونة برسيل ١٠ جنيه", qty: 2, wholesale: 140, retail: "١٠" },
  { id: 100, name: "كرتونة برسيل ٢٥ جنيه", qty: 1, wholesale: 185, retail: "٢٥" },
  { id: 101, name: "كرتونة صابون شمس", qty: 1, wholesale: 350, retail: "١٠ - ١٢" },
  { id: 102, name: "كرتونة باهي ٣٠ جنيه", qty: 2, wholesale: 150, retail: "٣٠" },
  { id: 103, name: "شنطة حفاضات سيتي بيبي مقاس ٣", qty: 2, wholesale: 178, retail: "٥ للقطعة / ١٨٥ للشنطة" },
  { id: 104, name: "شنطة حفاضات سيتي بيبي مقاس ٤", qty: 2, wholesale: 180, retail: "٥ للقطعة / ١٨٥ للشنطة" },
  { id: 105, name: "شنطة حفاضات سيتي بيبي مقاس ٥", qty: 2, wholesale: 190, retail: "٥ للقطعة / ١٩٥ - ٢٠٠ للشنطة" },
  { id: 106, name: "بخاخه فاضية", qty: 1, wholesale: 28, retail: "٢٥" },
  { id: 107, name: "زجاجة ديتول ٢٥٠ مل", qty: 3, wholesale: 160, retail: "١٧٥" },
  { id: 108, name: "مكن دروكو حريمي", qty: 6, wholesale: 20, retail: "١٠" },
  { id: 109, name: "مكن حلاقة دروكو رجالي", qty: 6, wholesale: 18, retail: "٥" },
  { id: 110, name: "علبة مكن حلاقة vip", qty: 1, wholesale: 225, retail: "٥ - ٦" },
  { id: 111, name: "سويت صن لاين كيسة لازالة الشعر", qty: 1, wholesale: 212, retail: "١٥" },
  { id: 112, name: "سويت حرير أصلي علبة لازالة الشعر", qty: 1, wholesale: 215, retail: "٢٠" },
  { id: 113, name: "كريم ون لازالة الشعر", qty: 1, wholesale: 218, retail: "٢٥" },
  { id: 114, name: "شفرات فلامنجو", qty: 1, wholesale: 215, retail: "٢٥" },
  { id: 115, name: "معجون اسنان سيجنال صغير", qty: 6, wholesale: 13.5, retail: "١٧" },
  { id: 116, name: "معجون اسنان سيجنال وسط", qty: 6, wholesale: 23.5, retail: "٢٧ - ٣٠" },
  { id: 117, name: "معجون اسنان المسواك وسط ٥٠ جم", qty: 9, wholesale: 17.5, retail: "٢٥ - ٣٠" },
  { id: 118, name: "معجون اسنان المسواك كبير ١٠٠ جم", qty: 9, wholesale: 33.5, retail: "٤٠ - ٤٥" },
  { id: 119, name: "معجون اسنان سيجنال فحم كبير ١٠٠ مل", qty: 3, wholesale: 50, retail: "٣٥" },
  { id: 120, name: "معجون اسنان سيجنال فحم وسط ٥٠ مل", qty: 3, wholesale: 29, retail: "٣٥" },
  { id: 121, name: "معجون اسنان كلوز آب صغير", qty: 6, wholesale: 13.5, retail: "١٨" },
  { id: 122, name: "معجون اسنان كلوز آب ٥٠ مل وسط", qty: 6, wholesale: 25, retail: "٣٥" },
  { id: 123, name: "معجون اسنان كلوز آب كبير ١٠٠ مل", qty: 3, wholesale: 43, retail: "٥٥ - ٦٠" },
  { id: 124, name: "ليفة استحمام كف", qty: 1, wholesale: 224, retail: "٣٠ - ٣٥" },
  { id: 125, name: "ليفة استحمام ظهر", qty: 1, wholesale: 224, retail: "٣٠ - ٣٥" },
  { id: 126, name: "ليفة استحمام كف مستورد", qty: 1, wholesale: 225, retail: "٣٥ - ٤٠" },
  { id: 127, name: "ليفة إستحمام شاور مدورة", qty: 1, wholesale: 214, retail: "٢٠" },
  { id: 128, name: "فرشاة اسنان كبار مستوردة", qty: 1, wholesale: 217.5, retail: "٢٥" },
  { id: 129, name: "فرشاة اسنان كبار عادية", qty: 1, wholesale: 28, retail: "١٥" },
  { id: 130, name: "فرشاة اسنان اطفال عادية", qty: 1, wholesale: 28, retail: "١٥" },
  { id: 131, name: "استاند برفان ٢٤ ق", qty: 2, wholesale: 424, retail: "٣٠" },
  { id: 132, name: "امواس مكنة الحلاقة لورد", qty: 1, wholesale: 260, retail: "١٥ - ٢٠" },
  { id: 133, name: "اسبرينج ماي واي مزيل عرق", qty: 50, wholesale: 29, retail: "٣٥" },
  { id: 134, name: "كرتونة بريل أكياس ٣٥ جم سلاسل", qty: 2, wholesale: 115, retail: "٣" },
  { id: 135, name: "علبة بخور ناموس", qty: 3, wholesale: 90, retail: "١٠" },
  { id: 136, name: "علبة مناديل مبللة رونزا ١٥ منديل", qty: 1, wholesale: 160, retail: "-" },
  { id: 137, name: "ليفة مواعين ذكية أي سبونج", qty: 1, wholesale: 280, retail: "١٥" },
  { id: 138, name: "بخور مسك الحرمين", qty: 1, wholesale: 100, retail: "١٥" },
  { id: 139, name: "علبة بخور مزاج اخضر", qty: 1, wholesale: 100, retail: "١٥" },
  { id: 140, name: "ليفة مواعين أسود", qty: 1, wholesale: 120, retail: "١٥" },
  { id: 141, name: "ليفة مواعين ناعمة مستوردة", qty: 1, wholesale: 180, retail: "٢٠" },
  { id: 142, name: "برسيل جل اوتوماتيك ٢.٥ كجم الوان", qty: 2, wholesale: 210, retail: "٢٣٠" },
  { id: 143, name: "برسيل جل اوتوماتيك ٢.٥ كجم اسود", qty: 2, wholesale: 190, retail: "٢٠٠ - ٢١٠" },
  { id: 144, name: "اوكسي جل اوتوماتيك ٢.٥ كجم الوان", qty: 2, wholesale: 182, retail: "١٩٥ - ٢٠٠" },
  { id: 145, name: "اوكسي جل اوتوماتيك ٢.٥ كجم اسود", qty: 2, wholesale: 182, retail: " ١٩٥ - ٢٠٠" },
  { id: 146, name: "تايد جل اوتوماتيك ٢.٥ كجم الوان", qty: 2, wholesale: 180, retail: " ١٩٠ - ١٩٥" },
  { id: 147, name: "اريال جل اوتوماتيك ٢.٥ كيلو", qty: 2, wholesale: 203, retail: "٢٢٠ - ٢٣٠" },
  { id: 148, name: "لفة سلك مواعين ٥ كيلو نصار ألماني", qty: 1, wholesale: 300, retail: "١٢" },
  { id: 149, name: "شاور جل ماي واي ۲ لتر عبير الزهور", qty: 2, wholesale: 97, retail: "١١٠-١١٥" },
  { id: 150, name: "شاور جل ماي واي ۲ لتر سهر الليالي", qty: 2, wholesale: 97, retail: "١١٠-١١٥" },
  { id: 151, name: "شاور جل ماي واي ۲ لتر بنفسج", qty: 2, wholesale: 97, retail: "١١٠ - ١١٥" },
  { id: 152, name: "شاور جل ماي واي ۲ لتر خوخ", qty: 2, wholesale: 97, retail: "١١٠ - ١١٥" },
  { id: 153, name: "شاور جل ماي واي ۲ لتر إشراقة", qty: 2, wholesale: 100, retail: "١١٥" },
  { id: 154, name: "شاور جل ماي واي ۲ لتر تندر", qty: 2, wholesale: 110, retail: "١٣٠" },
  { id: 155, name: "صوفي فوط صحية طويل", qty: 8, wholesale: 85, retail: "٥٠ / عرض ٩٥" },
  { id: 156, name: " صوفي فوط صحية طويل جداً", qty: 8, wholesale: 85, retail: "٥٠ / عرض ٩٥" },
  { id: 157, name: "حصيرة سلك مدور نوفا استلس أصلي", qty: 3, wholesale: 50, retail: "٥ - ٦" },
  { id: 158, name: "أولويز دبل مقاسات طويل وطويل جداً", qty: 30, wholesale: 47, retail: "٥٥" },
  { id: 159, name: "أولويز مفرد مقاسات طويل وطويل جداً", qty: 10, wholesale: 27.5, retail: "٣٠" },
  { id: 160, name: "كرتونة شامبو سباركل كبيرة أكياس", qty: 1, wholesale: 300, retail: "١" },
  { id: 161, name: "كرتونة شامبو صان سيلك أكياس", qty: 1, wholesale: 270, retail: "١.٥" },
  { id: 162, name: "بالة مناديل إسمايل سحب", qty: 1, wholesale: 260, retail: "١٨ قطعة / ٥٠ عرض" },
  { id: 163, name: " مناديل زينة جيب", qty: 2, wholesale: 185, retail: "٢.٥ قطعة / ٢٠ - ٢٥ شرنك" },
  { id: 164, name: " هاربيك منظف حمامات", qty: 1, wholesale: 224, retail: "٣٠" },
  { id: 165, name: "كيروكس مبيد حشرات زاحفة", qty: 6, wholesale: 83, retail: "٩٠ - ٩٥" },
  { id: 166, name: " مبيد حشرات راجون بودرة ١٢٠ جم", qty: 1, wholesale: 195, retail: "٢٥" },
  { id: 167, name: "عجينة صراصير صغيرة", qty: 6, wholesale: 25, retail: "٣٠" },
  { id: 168, name: "كلوركس أبيض لتر", qty: 8, wholesale: 26.5, retail: "٣٠" },
  { id: 169, name: "كلوركس ألوان ١ لتر", qty: 8, wholesale: 62, retail: "٦٥ - ٧٠" },
  { id: 170, name: "بريكس ألوان لتر ١", qty: 8, wholesale: 46, retail: "٥٠" },
  { id: 171, name: "بريكس أبيض ١ لتر", qty: 8, wholesale: 21, retail: "٢٥" },
  { id: 172, name: "كلوركس ألوان ۲ لتر", qty: 4, wholesale: 121, retail: "١٣٠" },
  { id: 173, name: "أكتيفا لتر ١ ألوان", qty: 8, wholesale: 35, retail: "٤٥" },
  { id: 174, name: "بليدج ملمع أثاث", qty: 6, wholesale: 63, retail: "٧٠" },
  { id: 175, name: "فريدا خشب ملمع أثاث", qty: 6, wholesale: 59, retail: "٦٥ - ٧٠" },
  { id: 176, name: "فنيك العاشر", qty: 1, wholesale: 240, retail: "٤٧" },
  { id: 177, name: "فريدا ملمع زجاج", qty: 6, wholesale: 53, retail: "٦٥" },
  { id: 178, name: "عرض ملمع زجاج تاتش", qty: 6, wholesale: 25, retail: "٣٥ - ٤٠" },
  { id: 179, name: "چركن وفير منظف أطباق ٤ كيلو", qty: 4, wholesale: 120, retail: "١٣٠" },
  { id: 180, name: " برسيل جل ظرف ٧٠٠ مل", qty: 1, wholesale: 410, retail: "٥٥" },
  { id: 181, name: " اوكسي سائل ٤٠٠ جم ظرف", qty: 1, wholesale: 240, retail: "٢٥" },
  { id: 182, name: "كريم حلاقة 5 خمسات", qty: 3, wholesale: 17.5, retail: "٢٥" },
  { id: 183, name: "كريم حلاقة 3 خمسات", qty: 3, wholesale: 17.5, retail: "٢٥" },
  { id: 184, name: "كريم حلاقة تمارا", qty: 3, wholesale: 17.5, retail: "٢٥" },
  { id: 185, name: "كريم فير اند لافلي صغير", qty: 3, wholesale: 16.5, retail: "٢٠" },
  { id: 186, name: "بودرة قدم بيور", qty: 1, wholesale: 214, retail: "٢٥" },
  { id: 187, name: "بودرة أوبال أطفال", qty: 3, wholesale: 17, retail: "٢٥" },
  { id: 188, name: "قطن أذن كبير ٢٠٠ عود بلاستيك", qty: 6, wholesale: 18, retail: "٢٥ - ٣٠" },
  { id: 189, name: " شاور دوش أكياس", qty: 2, wholesale: 120, retail: "٢.٥" },
  { id: 190, name: "شامبو أطفال نونو ٣٠٠ مل مشكل", qty: 4, wholesale: 55, retail: "٧٥" },
  { id: 191, name: "ورقة زجاج بوتجاز لاصق", qty: 6, wholesale: 13.5, retail: "٢٠" },
  { id: 192, name: "مكعبات مسك", qty: 2, wholesale: 47, retail: "١٠" },
  { id: 193, name: "غسول للوجه والبشرة إيفونا", qty: 3, wholesale: 25, retail: "٤٠" },
  { id: 194, name: "مناديل مبللة ٦٠ منديل", qty: 4, wholesale: 16, retail: "٢٠" },
  { id: 195, name: "مناديل مبللة ١٢٠ منديل", qty: 4, wholesale: 24, retail: "٣٠ - ٣٥" },
  { id: 196, name: "علبة بخور كبير ٥ ساعات", qty: 6, wholesale: 45, retail: "١٢" },
  { id: 197, name: "حنة جلوري مشكل ألوان", qty: 18, wholesale: 36, retail: "٤٠" },
  { id: 198, name: "شريط أكياس جل شعر هيركود", qty: 1, wholesale: 217.5, retail: "٢" },
  { id: 199, name: "شنطة حفاضات سيتي بيبي مقاس ٦", qty: 2, wholesale: 205, retail: "٦ للقطعة / ٢١٠ - ٢١٥ للشنطة" },
  { id: 200, name: "شنطة حفاضات سيتي بيبي مقاس ٢", qty: 2, wholesale: 155, retail: " ٥ للقطعة / ١٦٠ - ١٦٥ للشنطة " },
  { id: 201, name: " اريال كيلو ٢", qty: 1, wholesale: 540, retail: "١٤٥" },
  // ===== المنتجات الجديدة =====
  { id: 202, name: "اوكسي جل ٥ جنيه", qty: 1, wholesale: 75, retail: "5" },
  { id: 203, name: "اوكسي جل ١٠ جنيه", qty: 1, wholesale: 108, retail: "10" },
  { id: 204, name: "اوكسي جل ١٥ جنيه", qty: 1, wholesale: 108, retail: "15" },
  { id: 205, name: "أكياس حمام كريم", qty: 1, wholesale: 8, retail: "10" },
  { id: 206, name: "علبة كلوركس بودرة مزيل بقع", qty: 1, wholesale: 85, retail: "5" },
  { id: 207, name: "كريم تفتيح وترطيب البشرة فير آند لافلي ٤٠ جم", qty: 1, wholesale: 29.5, retail: "35" },
  { id: 208, name: "شامبو فاتيكا ٤٠٠ مل", qty: 1, wholesale: 65, retail: "70 - 75" },
  { id: 209, name: "شامبو صن سيلك ٣٥٠ مل", qty: 1, wholesale: 68, retail: "75 - 80" },
  { id: 210, name: "كريم شعر فاتيكا ١٤٠ مل وسط", qty: 1, wholesale: 45, retail: "50 - 55" },
  { id: 211, name: "سبراي تندر", qty: 1, wholesale: 65, retail: "80 - 90" },
  { id: 212, name: "شامبو كلير ضد القشرة ١٨٠ مل صغير", qty: 1, wholesale: 65, retail: "75 - 85" },
  { id: 213, name: "حمام كريم فاتيكا ١ كيلو", qty: 1, wholesale: 108, retail: "120" },
  { id: 214, name: "إريال أوتوماتيك ١ كيلو", qty: 1, wholesale: 65, retail: "75" },
  { id: 215, name: "حمام كريم مينك ١ كيلو", qty: 1, wholesale: 105, retail: "115" },
  { id: 216, name: "كريم هير food مينك ٢٥٠ مل", qty: 1, wholesale: 40.5, retail: "45 - 50" },
  { id: 217, name: "فازلين مرطب أورال طبي ٧٠ مل وسط", qty: 1, wholesale: 23, retail: "30 - 35" },
  { id: 218, name: "جل ترطيب كعب الغزال", qty: 1, wholesale: 20, retail: "25" },
  { id: 219, name: "كريم شعر تمارا", qty: 1, wholesale: 27.5, retail: "35" }
];

// ===== السلايدر =====
const DEFAULT_SLIDER = {
  images: [
    { id: "img1", url: "https://i.ibb.co/LhJVbMVM/19020.png", order: 1 },
    { id: "img2", url: "https://i.ibb.co/mVtrf67C/19023.png", order: 2 }
  ]
};

// ===== المنيو =====
const DEFAULT_MENU = {
  links: [
    { id: "link1", name: "الرئيسية", url: "home.html", order: 1 },
    { id: "link2", name: "عرض الأسعار", url: "index.html", order: 2 }
  ]
};

// ===== كروت الرئيسية =====
const DEFAULT_CARDS = {
  cards: [
    { id: "card1", icon: "fa-store", title: "عرض الأسعار", description: "ابحث عن سعر أي منتج", link: "index.html", order: 1 },
    { id: "card2", icon: "fa-image", title: "معرض المنتجات", description: "شاهد جميع المنتجات", link: "#", order: 2 }
  ]
};

// ===== الهيدر =====
const DEFAULT_HEADER = {
  imageUrl: "https://i.ibb.co/LhJVbMVM/19020.png"
};

// =============================================
// 🔄 دوال المزامنة الأساسية
// =============================================

function convertToFirebaseStructure(products) {
  const result = {};
  products.forEach(p => {
    const key = `product_${p.id}`;
    result[key] = {
      name: p.name,
      qty: p.qty,
      wholesale: p.wholesale,
      retail: p.retail,
      pricePerPiece: parseFloat(p.retail) || 0,
      pricePerShrink: null,
      pricePerCarton: null,
      pricePerBale: null,
      shrinkCount: null,
      cartonCount: null,
      baleCount: null,
      buyPrice: p.wholesale,
      imageUrl: ""
    };
  });
  return result;
}

function syncDefaultData() {
  // سيتم استدعاؤها من admin.html
  console.log("✅ جاهز للمزامنة");
}
