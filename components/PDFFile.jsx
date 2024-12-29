'use client';

import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { about, experience, education, skills } from '@/app/resume/page';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444444',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#666666',
  },
  experienceItem: {
    marginBottom: 15,
    paddingLeft: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  projectItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f8f8f8',
  }
});

const CVDocument = ({ repos }) => (
  <Document>
    <Page size="A4" style={styles.page}>      
      <View style={styles.section}>
        <Text style={styles.title}>GitHub Projeleri</Text>
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

const PDFFile = ({ repos }) => (
  <PDFDownloadLink
    document={<CVDocument repos={repos} />}
    fileName="cv.pdf"
    className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition"
  >
    {({ blob, url, loading, error }) =>
      loading ? 'Yükleniyor...' : 'CV İndir'
    }
  </PDFDownloadLink>
);

export default PDFFile; 