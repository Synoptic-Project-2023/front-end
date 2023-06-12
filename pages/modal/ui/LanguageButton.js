import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ImageBackground, TouchableOpacity  } from 'react-native';
import { useTranslation, withTranslation } from 'react-i18next';



const LanguageButton = () => {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const languageImages = {
		en: require('./images/en.png'),
		gbS: require('./images/gbS.png'),
		gbW: require('./images/gbW.png'),
		es: require('./images/es.png'),
		de: require('./images/de.png'),
		it: require('./images/it.png'),
		fr: require('./images/fr.png'),
	};

	const getBackgroundImage = (languageCode) => {
		return languageImages[languageCode];
	};

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		setIsOpen(false);
	};

	return (
		<View style = {styles.container}>
			
			<TouchableHighlight onPress={toggleDropdown} style={styles.button}>
				<ImageBackground source={getBackgroundImage(i18n.language)} style={styles.languageOptionBackground}>
					<Text style={styles.text}>{t('currentLanguage')}</Text>
				</ImageBackground>
			</TouchableHighlight>
			
			{isOpen && (
				<View style={styles.dropdown}>
					<TouchableOpacity  onPress={() => changeLanguage('en')} style={[styles.languageOption]}>
						<ImageBackground source={getBackgroundImage('en')} style={styles.languageOptionBackground}>
							<Text style={styles.text}>🇬🇧</Text>
						</ImageBackground>
					</TouchableOpacity >
					<TouchableHighlight onPress={() => changeLanguage('gbS')} style={[styles.languageOption]}>
						<ImageBackground source={getBackgroundImage('gbS')} style={styles.languageOptionBackground}>
							<Text style={styles.text}>🏴󠁧󠁢󠁳󠁣󠁴󠁿</Text>
						</ImageBackground>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => changeLanguage('gbW')} style={[styles.languageOption]}>
						<ImageBackground source={getBackgroundImage('gbW')} style={styles.languageOptionBackground}>
							<Text style={styles.text}>🏴󠁧󠁢󠁳󠁣󠁴󠁿󠁧󠁢󠁳󠁣󠁴󠁿</Text>
						</ImageBackground>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => changeLanguage('es')} style={[styles.languageOption]}>
						<ImageBackground source={getBackgroundImage('es')} style={styles.languageOptionBackground}>
							<Text style={styles.text}>🇪🇸󠁧󠁢󠁳󠁣󠁴󠁿󠁧󠁢󠁳󠁣󠁴󠁿</Text>
						</ImageBackground>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => changeLanguage('de')} style={[styles.languageOption]}>
						<ImageBackground source={getBackgroundImage('de')} style={styles.languageOptionBackground}>
							<Text style={styles.text}>🇩🇪󠁧󠁢󠁳󠁣󠁴󠁿󠁧󠁢󠁳󠁣󠁴󠁿</Text>
						</ImageBackground>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => changeLanguage('it')} style={[styles.languageOption]}>
						<ImageBackground source={getBackgroundImage('it')} style={styles.languageOptionBackground}>
							<Text style={styles.text}>🇮🇹󠁧󠁢󠁳󠁣󠁴󠁿󠁧󠁢󠁳󠁣󠁴󠁿</Text>
						</ImageBackground>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => changeLanguage('fr')} style={[styles.languageOption]}>
						<ImageBackground source={getBackgroundImage('fr')} style={styles.languageOptionBackground}>
							<Text style={styles.text}>🇫🇷</Text>
						</ImageBackground>
					</TouchableHighlight>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		zIndex: 1,
        position: 'absolute',
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
		flexDirection: 'column-reverse',
        //TODO: TERRIBLE PLEASE FIX
        bottom: 50,
		left: 50,
		padding: 0,
    },
	dropdown: {
		position: 'relative',
		padding: 8,
		borderRadius: 5,
		backgroundColor: 'white',
	},
	button: {
		padding: 8,
		maxHeight: 60,
	},
	languageOption: {
		paddingVertical: 4,
		maxHeight: 40,
	},
	languageOptionBackground: {
		flex: 1,
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: '#4A80F5',
		alignItems: 'center',
	},
    text: {
        textAlign: 'center',
        color: 'white',
		fontSize: 10,
		padding: 15
    }
});

export default LanguageButton;