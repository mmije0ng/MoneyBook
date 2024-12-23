// styles.js
import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF5DB',
    },
    content: {
        alignItems: 'center',
        position: 'absolute',
        top: height * 0.2, // 화면 높이를 기준으로 설정
        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: height * 0.01,
        left: width * 0.05,
        zIndex: 1,
    },
    icon: {
        width: width * 0.07, // 화면 너비의 7%
        height: width * 0.07,
        left: width * 0.001,
        marginRight: width * 0.03,
        marginTop: Platform.OS === 'ios' ? height * 0.073 : height * 0.007,
        resizeMode: 'contain',
    },
    header: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? height * 0.07 : height * 0.001,
        left: width * 0.07,
        fontSize: width * 0.06,
        fontWeight: '800',
        color: '#337D69',
        zIndex: 1,
        fontFamily: 'Pridi-SemiBold',
    },
    title: {
        fontSize: Platform.OS === 'ios' ? width * 0.07 : width * 0.07,
        textAlign: 'center',
        fontWeight: '800',
        marginTop: Platform.OS === 'ios' ? height * 0.04 : height * 0.03,
        marginBottom: height * 0.02,
        color: '#FFFFFF',
        fontFamily: 'Pridi-Bold',
    },
    button1: {
        width: width * 0.45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.09,
        backgroundColor: '#FFD38B',
        borderRadius: height * 0.03,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
    },
    button2: {
        width: width * 0.45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.03,
        backgroundColor: '#FFF7EA',
        borderRadius: height * 0.03,
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
    },
    buttonText: {
        fontSize: width * 0.05,
        fontWeight: '500',
        color: '#093030',
    },
    customView: {
        position: 'absolute',
        left: Platform.OS === 'ios' ? width * 0.01 : width * 0.12,
        right: width * -0.2,
        top: Platform.OS === 'ios' ? height * 0.2 : height * 0.2,
        bottom: height * 0.5,
        backgroundColor: '#337D69',
        zIndex: 0,
        borderTopLeftRadius: Platform.OS === 'ios' ? width * 7 : width * 12,
        borderBottomRightRadius: height * 1.2,
    },
    customView2: {
        position: 'absolute',
        left: width * -1,
        right: width * 0.26,
        top: height * 0.17,
        bottom: height * 0.27,
        backgroundColor: '#59A15C',
        zIndex: 0,
        borderTopRightRadius: Platform.OS === 'ios' ? width * 0.8 : width * 1.4,
        borderBottomLeftRadius: height * 1,
    },
    customView3: {
        position: 'absolute',
        left: width * -0.1,
        right: width * -0.35,
        top: height * 0.37,
        bottom: height * 0.18,
        backgroundColor: '#79BFBC',
        zIndex: 0,
        borderTopLeftRadius: width * 2,
        borderBottomRightRadius: height * 1,
    },
    customView4: {
        position: 'absolute',
        left: Platform.OS === 'ios' ? width * -0.2 : width * -0.08,
        right: width * -0.06,
        top: height * 0.37,
        bottom: height * 0.18,
        backgroundColor: '#32A9A3',
        zIndex: 0,
        borderTopLeftRadius: Platform.OS === 'ios' ? width * 0.8 : width * 2.4,
        borderBottomRightRadius: height * 1.5,
    },
});

export default styles;