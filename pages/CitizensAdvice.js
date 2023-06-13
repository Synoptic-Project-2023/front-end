import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Link from './modal/ui/Link';

export default function CitizensAdvice({ navigation, route }) {
    const { t } = useTranslation();
    return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{t('fbTitle')}</Text>

        <Text style={styles.subtitle}>{t('fbSubTitle1')}</Text>
        <Text style={styles.paragraph}>{t('fbPara1')}</Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara1list1')} <Link url="https://www.citizensadvice.org.uk/scotland/debt-and-money/help-with-debt/dealing-with-your-debts/check-if-you-can-increase-your-income/"/></Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara1List2')} <Link url="https://www.citizensadvice.org.uk/scotland/benefits/help-if-on-a-low-income/scottish-welfare-fund-s/scottish-welfare-fund-crisis-grants-s/"/></Text>
        <Text style={styles.paragraph}>{t('fbPara2')}</Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara2List1')}<Link url="https://www.citizensadvice.org.uk/scotland/about-us/get-advice-s/"/></Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara2List2')}<Link url="https://moneytalkteam.org.uk/home"/></Text>
        <Text style={styles.paragraph}>{t('fbPara3')}</Text>

        <Text style={styles.subtitle}>{t('fbSubTitle2')}</Text>
        <Text style={styles.paragraph}>{t('fbPara4')}</Text>
        <Text style={styles.paragraph}>{t('fbPara5')}</Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara5List1')}</Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara5List2')}</Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara5List3')}</Text>
        <Text style={styles.paragraph}>{t('fbPara6')}</Text>

        <Text style={styles.subtitle}>{t('fbSubTitle3')}</Text>
        <Text style={styles.paragraph}>{t('fbPara7')}</Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara7List1')}</Text> 
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara7List2')}<Link url="https://www.citizensadvice.org.uk/scotland/about-us/get-advice-s/"/></Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara7List3')}<Link url="https://www.foodaidnetwork.org.uk/our-members"/></Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara7List4')}<Link url="https://www.trusselltrust.org/get-help/find-a-foodbank/"/></Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara7List5')}<Link url="https://www.mygov.scot/find-your-local-council/"/></Text>

        <Text style={styles.subtitle}>{t('fbSubTitle4')}</Text>
        <Text style={styles.paragraph}>{t('fbPara8')}</Text>

        <Text style={styles.subtitle}>{t('fbSubTitle5')}</Text>
        <Text style={styles.paragraph}>{t('fbPara9')}</Text>
        <Text style={styles.paragraph}>{t('fbPara10')}<Link url="https://www.citizensadvice.org.uk/scotland/debt-and-money/get-help-with-the-cost-of-living/"/></Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara10List1')}<Link url="https://www.mygov.scot/find-your-local-council/"/></Text>
        <Text style={styles.listItem}>{`\u25CF`} {t('fbPara10List2')}<Link url="https://www.citizensadvice.org.uk/scotland/about-us/get-advice-s/"/></Text>
        <View style={styles.blankSpace}/>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 20,
        justifyContent: 'center'
	},
	title: {
		fontSize: 48,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 40,
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 10,
	},
	paragraph: {
		fontSize: 32,
		marginBottom: 10,
	},
	listItem: {
        listStyleType: "circle",
		marginLeft: 40,
        fontSize: 32,
		marginBottom: 5,
	},
    blankSpace: {
        paddingVertical: 100,
    }
});