'use client';

// React-PDF kütüphanesinden gerekli bileşenlerin import edilmesi
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// PDF dosyası için stil tanımlamaları
const styles = StyleSheet.create({
  // Sayfa container stili
  page: {
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  // Bölüm container stili
  section: {
    marginBottom: 20,
  },
  // Ana başlık stili
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  // Alt başlık stili
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444444',
  },
  // Normal metin stili
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#666666',
  },
  // Deneyim öğesi container stili
  experienceItem: {
    marginBottom: 15,
    paddingLeft: 10,
  },
  // Yetenekler grid container stili
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  // Proje kartı stili
  projectItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f8f8f8',
  }
});

// PDF dökümanının içeriğini oluşturan bileşen
const CVDocument = ({ repos }) => (
  <Document>
    <Page size="A4" style={styles.page}>      
      <View style={styles.section}>
        <Text style={styles.title}>GitHub Projeleri</Text>
        {/* GitHub repolarını listele */}
        {repos?.map((repo, index) => (
          <View key={index} style={styles.projectItem}>
            <Text style={styles.subtitle}>{repo.name}</Text>
            <Text style={styles.text}>{repo.description}</Text>
            <Text style={styles.text}>Kullanılan Dil: {repo.language}</Text>
            <Text style={styles.text}>Yıldız Sayısı: {repo.stargazers_count}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// PDF indirme bağlantısını oluşturan ana bileşen
const PDFFile = ({ repos }) => (
  <PDFDownloadLink
    document={<CVDocument repos={repos} />}
    fileName="cv.pdf"
    className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition"
  >
    {/* Yükleme durumuna göre buton metni */}
    {({ blob, url, loading, error }) =>
      loading ? 'Yükleniyor...' : 'CV İndir'
    }
  </PDFDownloadLink>
);

export default PDFFile;