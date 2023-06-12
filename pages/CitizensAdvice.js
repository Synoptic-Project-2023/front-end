import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function CitizensAdvice({ navigation, route }) {
    const { t } = useTranslation();
    return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{t('fbTitle')}</Text>

        <Text style={styles.subtitle}>{t('fbSubTitle1')}</Text>
        <Text style={styles.paragraph}>{t('fbPara1')}</Text>
        <Text style={styles.listItem}>{t('fbPara1list1')}</Text>
        <Text style={styles.listItem}>{t('fbPara1List2')}</Text>

        <Text style={styles.subtitle}>{t('fbSubTitle2')}</Text>
        <Text style={styles.paragraph}>{t('fbPara4')}</Text>

        <Text style={styles.subtitle}>{t('fbSubTitle3')}</Text>
        <Text style={styles.paragraph}>{t('fbPara7')}</Text>
        <Text style={styles.listItem}>{t('fbPara7List1')}</Text>
        <Text style={styles.listItem}>{t('fbPara7List2')}</Text>
        <Text style={styles.listItem}>{t('fbPara7List3')}</Text>
        <Text style={styles.listItem}>{t('fbPara7List4')}</Text>
        <Text style={styles.listItem}>{t('fbPara7List5')}</Text>

        <Text style={styles.subtitle}>{t('fbSubTitle4')}</Text>
        <Text style={styles.paragraph}>{t('fbPara8')}</Text>

        <Text style={styles.subtitle}>{t('fbSubTitle5')}</Text>
        <Text style={styles.paragraph}>{t('fbPara9')}</Text>
        <Text style={styles.paragraph}>{t('fbPara10')}</Text>
        <Text style={styles.listItem}>{t('fbPara10List1')}</Text>
        <Text style={styles.listItem}>{t('fbPara10List2')}</Text>
        <View style={styles.blankSpace}/>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 10,
	},
	paragraph: {
		fontSize: 16,
		marginBottom: 10,
	},
	listItem: {
		marginLeft: 20,
		marginBottom: 5,
	},
    blankSpace: {
        paddingVertical: 100
    }
});