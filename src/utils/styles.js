import {
    StyleSheet
} from "react-native";


// Main page styling
export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f8fe',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tab: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        paddingVertical: 20,
    },
    containerFluid: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    main_img_holder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 30
    },
    main_img_text: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 40,

    },
    main_text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'product_sans'
    },
    main_btn_text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18,
        fontFamily: 'product_sans'
    },
    button: {
        width: 250,
        height: 50,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#319dfa',
        justifyContent: 'center',
        marginBottom: 40,
        borderWidth: 1,
        borderColor: '#0688f9',
    },
    loginButton: {
        width: 250,
        height: 50,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#319dfa',
        justifyContent: 'center',
        marginBottom: 25,
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#0688f9',
    },
    btn: {
        width: 250,
        height: 50,
        padding: 10,
        borderRadius: 50,
        borderWidth: 1,
        justifyContent: 'center',
        marginBottom: 40,
    },
    topText: {
        fontWeight: '700',
        color: '#319dfa',
        fontSize: 45,
        fontFamily: 'product_sans'
    },
    subText: {
        fontWeight: '300',
        color: '#319dfa',
        fontSize: 30,
        fontFamily: 'product_sans'
    },
    text: {
        fontWeight: '300',
        color: '#000',
        fontSize: 18,
        fontFamily: 'product_sans',
    },
    icon: {
        fontWeight: '300',
        color: '#000',
        fontSize: 22,
        fontFamily: 'product_sans',
        marginLeft: 5,
    },
    logo: {
        fontWeight: '300',
        color: '#000',
        fontSize: 20,
        fontFamily: 'product_sans',
        paddingHorizontal: 10,
    },
    p: {
        fontWeight: '300',
        // fontSize: 18,
        fontFamily: 'product_sans',
    },
    pLight: {
        fontWeight: '200',
        fontSize: 12,
        fontFamily: 'product_sans',
        color:'#333',
        marginVertical: 3,
    },
    h5: {
        fontWeight: '300',
        fontSize: 18,
        fontFamily: 'product_sans',
    },
    h3: {
        fontWeight: '600',
        color: '#354334',
        fontSize: 22,
        fontFamily: 'product_sans',
    },
    smallText: {
        fontWeight: '300',
        color: '#319dfa',
        fontSize: 14,
        fontFamily: 'product_sans',
    },
    input: {
        backgroundColor: 'rgba(255,255,255, 1)',
        width: 300,
        height: 60,
        paddingHorizontal: 25,
        borderRadius: 30,
        marginVertical: 10,
        fontFamily: 'product_sans',
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#f2f3f2',
    },
    inputWithIcon: {
        backgroundColor: 'rgba(255,255,255, 1)',
        width: 240,
        // height: 60,
        paddingLeft: 10,
        // borderRadius: 30,
        color: 'rgba(0,0,0, 0.3)',
        fontFamily: 'product_sans',
        fontSize: 14,
    },
    inputHolder: {
        backgroundColor: 'rgba(255,255,255, 1)',
        width: 280,
        height: 40,
        // paddingRight: 30,
        // paddingLeft: 35,
        borderRadius: 30,
        // marginVertical: 10,
        fontFamily: 'product_sans',
        fontSize: 14,
        // borderWidth: 1,
        // borderColor: '#f2f3f2',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputWrapper: {
        backgroundColor: 'rgba(255,255,255, 1)',
        width: 300,
        height: 60,
        paddingRight: 30,
        paddingLeft: 35,
        borderRadius: 30,
        marginVertical: 10,
        fontFamily: 'product_sans',
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#f2f3f2',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    textBoxField: {
        fontFamily: 'product_sans',
        fontSize: 16
    },
    cards: {
        width: '100%',
        height: 300,
        backgroundColor: '#fff',
        borderWidth: 4,
        borderBottomColor: 'orange',
        borderTopColor: '#f9a825',
        marginBottom: 7,
        paddingVertical: 0,
    },
    scroll: {
        flex: 1,
        width: '100%',
    },
    img: {
        width: '100%',
        height: '100%'
    },
    dp: {
        width: 170,
        backgroundColor: '#fff',
        height: 170,
        borderRadius: 100,
        position: 'absolute',
        top: 110,
        zIndex: 10,
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: '#fff',
    },
    dpHeader: {
        width: '100%',
        height: 200,
        overflow: "visible"
    },
    bar: {
        width: '100%',
        backgroundColor: '#fff',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    progress: {
        width: '100%',
        backgroundColor: '#fff',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 25,
    },
    dpFooter: {
        width: '100%',
        backgroundColor: '#fff',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },



});