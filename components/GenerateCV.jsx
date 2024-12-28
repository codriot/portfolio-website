import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { about, experience, education, skills } from '@/app/resume/page';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

// Create Document Component
const CVDocument = ({ repos }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.text}>{about.description}</Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Experience</Text>
        {experience.items.map((item, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={styles.subtitle}>{item.position}</Text>
            <Text style={styles.text}>{item.company}</Text>
            <Text style={styles.text}>{item.duration}</Text>
          </View>
        ))}
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Education</Text>
        {education.items.map((item, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={styles.subtitle}>{item.degree}</Text>
            <Text style={styles.text}>{item.institution}</Text>
            <Text style={styles.text}>{item.duration}</Text>
          </View>
        ))}
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Skills</Text>
        <View style={styles.skillsContainer}>
          {skills.skillList.map((skill, index) => (
            <Text key={index} style={styles.text}>
              {skill.name}
            </Text>
          ))}
        </View>
      </View>

      {/* GitHub Projects Section */}
      <View style={styles.section}>
        <Text style={styles.title}>GitHub Projects</Text>
        {repos?.map((repo, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={styles.subtitle}>{repo.name}</Text>
            <Text style={styles.text}>{repo.description}</Text>
            <Text style={styles.text}>Language: {repo.language}</Text>
            <Text style={styles.text}>Stars: {repo.stargazers_count}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export const GenerateCV = ({ repos }) => (
  <PDFDownloadLink
    document={<CVDocument repos={repos} />}
    fileName="my-cv.pdf"
    className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition"
  >
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Download CV'
    }
  </PDFDownloadLink>
); 