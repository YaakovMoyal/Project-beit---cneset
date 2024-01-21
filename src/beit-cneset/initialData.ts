import { BeitCneset } from './entities/beit-cneset.entity';

const initialData: BeitCneset[] = [
  {
    name: 'מוסדות בעלזא',
    address: 'קדושת אהרון 10, ירושלים',
    community: 'בעלז',
    image:
      'https://jerusalem.mynet.co.il/picserver/mynet/wcm_upload/wcm_mynet_pic/2019/10/23/518512/518512.jpg',
    gabai: {
      name: "ר' משה הכהן",
      email: 'gabai1@example.com',
      password: 'securePassword123',
      managementOf: 'מוסדות בעלזא',
      phone: '0551234567',
    },
    tfilot: [
      { tfila: 'שחרית', time: '09:00' },
      { tfila: 'מנחה', time: '13:00' },
      { tfila: 'ערבית', time: '19:30' },
    ],
  },
  {
    name: 'בית מדרש גור',
    address: 'ירמיהו 53, ירושלים',
    community: 'גור',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8dLnMqEVip2hP4SCF7EY3nPFFhyTrvvajg&usqp=CAU',
    gabai: {
      name: "ר' אליהו הלוי",
      email: 'gabai2@example.com',
      password: 'strongPassword456',
      managementOf: 'בית מדרש גור',
      phone: '02-5667778',
    },
    tfilot: [
      { tfila: 'שחרית', time: '10:30' },
      { tfila: 'מנחה', time: '16:15' },
      { tfila: 'ערבית', time: '20:00' },
    ],
  },

  {
    name: 'מוסדות אריאל',
    address: 'הצפון 5, אריאל',
    community: 'אריאל',
    image:
      'https://static.wixstatic.com/media/eafb08_a77dba3f19b64d15bb06784ef8ac67b2~mv2.jpg/v1/fill/w_320,h_204,q_90/eafb08_a77dba3f19b64d15bb06784ef8ac67b2~mv2.jpg',
    gabai: {
      name: "ר' יעקב לוי",
      email: 'gabai4@example.com',
      password: 'securePassword910',
      managementOf: 'מוסדות אריאל',
      phone: '09-1234567',
    },
    tfilot: [
      { tfila: 'שחרית', time: '07:30' },
      { tfila: 'מנחה', time: '13:15' },
      { tfila: 'ערבית', time: '19:00' },
    ],
  },
  {
    name: "מוסדות ויז'ניץ",
    address: 'הנביאים 20, ירושלים',
    community: "ויז'ניץ",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBIsQntlcVknK6w0uuqS9r4eIHCLjPp7haQ&usqp=CAU',
    gabai: {
      name: "ר' יצחק כהן",
      email: 'gabai5@example.com',
      password: 'securePassword111',
      managementOf: "מוסדות ויז'ניץ",
      phone: '04-5556667',
    },
    tfilot: [
      { tfila: 'שחרית', time: '08:30' },
      { tfila: 'מנחה', time: '14:30' },
      { tfila: 'ערבית', time: '19:45' },
    ],
  },
  {
    name: 'בית כנסת תל אביב',
    address: 'השלום 10, תל אביב',
    community: 'תל אביב',
    image:
      'https://upload.wikimedia.org/wikipedia/he/thumb/b/b5/%D7%91%D7%99%D7%AA_%D7%94%D7%9E%D7%93%D7%A8%D7%A9_%D7%9C%D7%94%D7%9C%D7%9B%D7%94_%D7%91%D7%94%D7%AA%D7%99%D7%99%D7%A9%D7%91%D7%95%D7%AA.jpg/330px-%D7%91%D7%99%D7%AA_%D7%94%D7%9E%D7%93%D7%A8%D7%A9_%D7%9C%D7%94%D7%9C%D7%9B%D7%94_%D7%91%D7%94%D7%AA%D7%99%D7%99%D7%A9%D7%91%D7%95%D7%AA.jpg',
    gabai: {
      name: "ר' יהודה כהן",
      email: 'gabai6@example.com',
      password: 'strongPassword789',
      managementOf: 'בית כנסת תל אביב',
      phone: '03-4445556',
    },
    tfilot: [
      { tfila: 'שחרית', time: '09:15' },
      { tfila: 'מנחה', time: '15:00' },
      { tfila: 'ערבית', time: '20:30' },
    ],
  },
  {
    name: `בית כנסת הגדול`,
    address: 'הבנים 40, פתח תקווה',
    community: 'פתח תקווה',
    image:
      'https://www.yeilat.org/media/3027/%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C-%D7%91%D7%99%D7%AA-%D7%94%D7%9E%D7%93%D7%A8%D7%A9900.jpg',
    gabai: {
      name: "ר' דוד כהן",
      email: 'gabai7@example.com',
      password: 'securePassword222',
      managementOf: 'בית כנסת הגדול',
      phone: '03-1234567',
    },
    tfilot: [
      { tfila: 'שחרית', time: '07:00' },
      { tfila: 'מנחה', time: '13:30' },
      { tfila: 'ערבית', time: '18:15' },
    ],
  },
  {
    name: "ישיבת פוניבז'",
    address: 'רחוב הרב קוק 16, בני ברק',
    community: "פוניבז'",
    image:
      'https://images.kikar.co.il/cdn-cgi/image/format=jpeg,fit=contain,width=900/2023/04/26/ddcd3310-e451-11ed-8756-976be84b426a__h720_w1280.jpeg',
    gabai: {
      name: "ר' שלמה כהן",
      email: 'gabai8@example.com',
      password: 'strongPassword123',
      managementOf: "ישיבת פוניבז'",
      phone: '03-7654321',
    },
    tfilot: [
      { tfila: 'שחרית', time: '07:00' },
      { tfila: 'מנחה', time: '13:15' },
      { tfila: 'ערבית', time: '20:00' },
    ],
  },

  {
    name: 'ישיבת מיר',
    address: 'רחוב שבטי ישראל 29, ירושלים',
    community: 'מיר',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/%D7%91%D7%A0%D7%99%D7%9F_%D7%99%D7%A9%D7%99%D7%91%D7%AA_%D7%9E%D7%99%D7%A8_%D7%91%D7%A8%D7%9B%D7%A4%D7%9C%D7%93.jpg',
    gabai: {
      name: "ר' משה לוי",
      email: 'gabai9@example.com',
      password: 'securePassword777',
      managementOf: 'ישיבת מיר',
      phone: '02-5000005',
    },
    tfilot: [
      { tfila: 'שחרית', time: '08:45' },
      { tfila: 'מנחה', time: '15:30' },
      { tfila: 'ערבית', time: '20:15' },
    ],
  },

  {
    name: 'בית כנסת הרמבן',
    address: 'הראשונים 50, קריית מטלון',
    community: 'מטר',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/%D7%94%D7%97%D7%95%D7%A8%D7%91%D7%94_%D7%95%D7%91%D7%99%D7%AA_%D7%9B%D7%A0%D7%A1%D7%AA_%D7%94%D7%A8%D7%9E%D7%91%22%D7%9F.jpg/800px-%D7%94%D7%97%D7%95%D7%A8%D7%91%D7%94_%D7%95%D7%91%D7%99%D7%AA_%D7%9B%D7%A0%D7%A1%D7%AA_%D7%94%D7%A8%D7%9E%D7%91%22%D7%9F.jpg?20151007072139',
    gabai: {
      name: "ר' יוסף כהן",
      email: 'gabai10@example.com',
      password: 'strongPassword5432',
      managementOf: 'בית כנסת הרמבן',
      phone: '09-2222222',
    },
    tfilot: [
      { tfila: 'שחרית', time: '06:30' },
      { tfila: 'מנחה', time: '12:45' },
      { tfila: 'ערבית', time: '19:15' },
    ],
  },
  {
    name: 'בית הכנסת חבד',
    address: "רחוב ז'בוטינסקי 7, רמת גן",
    community: 'חבד',
    image:
      'https://content.chabadigital.org/wp-content/uploads/2017/10/770kchabad.jpg',
    gabai: {
      name: "ר' אברהם כהן",
      email: 'gabai11@example.com',
      password: 'strongPassword890',
      managementOf: 'בית הכנסת חבד',
      phone: '03-7894561',
    },
    tfilot: [
      { tfila: 'שחרית', time: '08:00' },
      { tfila: 'מנחה', time: '16:45' },
      { tfila: 'ערבית', time: '20:45' },
    ],
  },

  {
    name: 'ישיבת סלונים',
    address: 'רחוב הרב עוזיאל 3, ירושלים',
    community: 'סלונים',
    image:
      'https://greenpel.co.il/wp-content/uploads/2020/12/%D7%A1%D7%95%D7%A4%D7%99-%D7%97%D7%93%D7%A9-3-scaled.jpg',
    gabai: {
      name: "ר' יצחק כהן",
      email: 'gabai12@example.com',
      password: 'strongPassword246',
      managementOf: 'ישיבת סלונים',
      phone: '02-1234569',
    },
    tfilot: [
      { tfila: 'שחרית', time: '06:45' },
      { tfila: 'מנחה', time: '13:00' },
      { tfila: 'ערבית', time: '21:00' },
    ],
  },
];

export default initialData;
