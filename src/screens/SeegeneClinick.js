import * as React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import CustomButton from '../component/CustomButton';
import TopNavigation from '../component/TopNavigation';
import ArrowButton from '../component/ArrowButton';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    case1: {
        flex: 2,
        backgroundColor: 'white',
    },
    case2: {
        flex: 2,
        backgroundColor: 'white',
    },
    case3: {
        flex: 2,
        backgroundColor: 'white',
    },
    case4: {
        flex: 2,
        backgroundColor: 'white',
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
    },
    elem:{
        // flex:1,
        padding:13,
        margin:20,
        marginTop:3,
        backgroundColor: 'white',
    },
    elem_img:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    elem_color2:{
        backgroundColor:'#F5F6FA',
        padding:5, 
        margin:2,
        borderRadius:10,
        alignItems:'center'
    }
});

function MyButton({name}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => 
                name === 'Heart' ? navigation.navigate('Heart')
                : name === 'Neurocognitive' ? navigation.navigate('Neurocognitive')
                : name === 'Cardiovascular' ? navigation.navigate('Cardiovascular') 
                : name === 'Musculoskeletal' ? navigation.navigate('Musculoskeletal')
                : name === 'Metabolism' ? navigation.navigate('Metabolism')
                : name === 'Immune' ? navigation.navigate('Immune')
                : name === 'SkinAndBody' ? navigation.navigate('SkinAndBody')
                : navigation.navigate('Etc')
             }>
            <Image source={require('../../assets/arrow.png')} style={{width:19, height:19}} />
        </TouchableOpacity>
    );
}

const SeegeneClinick = () => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.case1}>
                <TopNavigation name='seegene'/>
                <View style={styles.elem}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>[???????????????]?????? ?????? ??????</Text>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24}}>??????/??????/?????? ??????</Text>
                        </View>
                        <ArrowButton title='RecentVisitHistory'></ArrowButton>
                    </View>
                    <View style={{ borderRadius:5, padding:5, borderRadius:10, borderLeftWidth:10, borderLeftColor:'#CAB1FF', borderTopWidth:1, borderTopColor:'#f2f0f0', borderRightWidth:1, borderRightColor:'#f2f0f0', borderBottomWidth:1, borderBottomColor:'#f2f0f0'}}>
                        <View style={{paddingTop:5, paddingLeft:20}}>
                            <Text style={{fontSize:18, fontFamily:'NotoSansKR-Bold', marginBottom:-3}}>??????</Text>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/man.png')} style={{width:65, height:65, marginRight: 10}}/>
                                <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#545454'}}><Text style={{color:'#000000'}}>2021??? 6??? 21???</Text>{'\n'}????????? ?????????</Text>
                            </View>
                        </View>
                        <View style={{padding: 6, paddingLeft:20}}>
                            <Text style={{fontSize:14, fontFamily:'NotoSansKR-Bold', marginBottom:-3}}>????????????</Text>
                            <View style={{ backgroundColor:'#F5F6FA',padding:20, borderRadius:8, paddingTop:10, paddingBottom:10, marginRight:10}}>
                                <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14}}>??????????????? ??????????????????. ??????????????? ???????????? ?????? ??? ?????? ???????????? ?????????. ?????? ?????? 10,000?????? ????????? ??????????????????. ??????????????????!</Text>
                            </View>
                        </View>
                        <View style={{padding: 6, paddingLeft:20}}>
                            <Text style={{fontSize:14, fontFamily:'NotoSansKR-Bold', marginBottom:-3}}>????????????</Text>
                            <View style={{ backgroundColor:'#F5F6FA',padding:20, borderRadius:8, paddingTop:10, paddingBottom:10, marginRight:10, marginBottom:7}}>
                                <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14}}>??????????????? ??????????????????. ??????????????? ???????????? ?????? ??? ?????? ???????????? ?????????. ?????? ?????? 10,000?????? ????????? ??????????????????. ??????????????????!</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.case2} >
                <View style={styles.elem}>
                    <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>????????? ??????</Text>
                    <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24}}>???????????? ??????</Text>
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',borderBottomWidth:1, borderBottomColor:'#E6E9F4'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/head.png')} style={{width:22, height:27}} />
                                <Text  style={{fontFamily:'NotoSansKR-Bold', fontSize:16, marginLeft:15}}>??????</Text>
                            </View>
                            <MyButton name='Heart' />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',borderBottomWidth:1, borderBottomColor:'#E6E9F4'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/brain.png')}style={{width:22, height:27}}/>
                                <Text  style={{fontFamily:'NotoSansKR-Bold', fontSize:16, marginLeft:15}}>????????????</Text>
                            </View>
                            <MyButton name='Neurocognitive' />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',borderBottomWidth:1, borderBottomColor:'#E6E9F4'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/heart.png')} style={{width:22, height:27}}/>
                                <Text  style={{fontFamily:'NotoSansKR-Bold', fontSize:16, marginLeft:15}}>?????????</Text>
                            </View>
                            <MyButton name='Cardiovascular' />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',borderBottomWidth:1, borderBottomColor:'#E6E9F4'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/bone.png')} style={{width:22, height:27}} />
                                <Text  style={{fontFamily:'NotoSansKR-Bold', fontSize:16, marginLeft:15}}>?????????</Text>
                            </View>
                            <MyButton name='Musculoskeletal' />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',borderBottomWidth:1, borderBottomColor:'#E6E9F4'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/meta.png')} style={{width:22, height:27}} />
                                <Text  style={{fontFamily:'NotoSansKR-Bold', fontSize:16, marginLeft:15}}>??????</Text>
                            </View>
                            <MyButton name='Metabolism' />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',borderBottomWidth:1, borderBottomColor:'#E6E9F4'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/secur.png')} style={{width:22, height:27}} />
                                <Text  style={{fontFamily:'NotoSansKR-Bold', fontSize:16, marginLeft:15}}>??????</Text>
                            </View>
                            <MyButton name='Immune' />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',borderBottomWidth:1, borderBottomColor:'#E6E9F4'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/skin.png')} style={{width:22, height:27}} />
                                <Text  style={{fontFamily:'NotoSansKR-Bold', fontSize:16, marginLeft:15}}>?????? & ??????</Text>
                            </View>
                            <MyButton name='SkinAndBody' />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',borderBottomWidth:1, borderBottomColor:'#E6E9F4'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/etc.png')} style={{width:19, height:20}} />
                                <Text  style={{fontFamily:'NotoSansKR-Bold', fontSize:16, marginLeft:15}}>??????</Text>
                            </View>
                            <MyButton name='Etc' />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.case3} >
                <View style={styles.elem}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>?????? ?????? ?????????</Text>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24}}>????????????</Text>
                        </View>
                        <ArrowButton title='RecentVisitHistory'></ArrowButton>
                    </View>
                    <View style={{backgroundColor:'#F5F6FA', borderRadius:9, marginBottom:13}}>
                        <View style={{flexDirection:'row', padding:5}}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={require('../../assets/feel.png')} style={{width:25, height:25, marginTop:4}} />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:12, color:'#6765E9'}}>?????? ?????????</Text>
                            </View>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:12, marginLeft:20}}>????????? ????????? ???????????? ????????? ????????????{'\n'}???????????? ?????? ??????????????? ???????????????.</Text>
                        </View>
                    </View>

                    <CustomButton title="?????? ????????????" onPress={() => {alert("????????????")}}></CustomButton>
                    
                    <View style={{flexDirection:'row', alignItems:'center', borderTopWidth:1, borderTopColor:'#D7DBEC', marginTop:20}}>
                        <View style={{width:60, height:60, backgroundColor:'#60CFE3', borderRadius:30, alignItems:'center', justifyContent: 'center', marginRight:20}}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#FFFFFF'}}>D-2</Text>
                        </View>
                        <View>
                            <View style={{flexDirection:'row', alignItems:'center', marginBottom:-8, marginTop:12}}>
                                <Image source={require('../../assets/calen.png')} style={{width:25, height:25, marginRight:10}} />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14}}>2021??? 7??? 6??? (???)</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', marginBottom:-8}}>
                                <Image source={require('../../assets/clock.png')} style={{width:25, height:25, marginRight:10}} />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14}}>?????? 3:00</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/note.png')} style={{width:25, height:25, marginRight:10}} />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14}}>??????????????????</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', borderTopWidth:1, borderTopColor:'#D7DBEC', marginTop:13}}>
                        <View style={{width:60, height:60, backgroundColor:'#60CFE3', borderRadius:30, alignItems:'center', justifyContent: 'center', marginRight:20}}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#FFFFFF'}}>D-2</Text>
                        </View>
                        <View>
                            <View style={{flexDirection:'row', alignItems:'center', marginBottom:-8, marginTop:12}}>
                                <Image source={require('../../assets/calen.png')} style={{width:25, height:25, marginRight:10}} />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14}}>2021??? 7??? 6??? (???)</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', marginBottom:-8}}>
                                <Image source={require('../../assets/clock.png')} style={{width:25, height:25, marginRight:10}} />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14}}>?????? 3:00</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={require('../../assets/note.png')} style={{width:25, height:25, marginRight:10}} />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14}}>??????????????????</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', borderTopWidth:1, borderTopColor:'#D7DBEC', marginTop:13, borderBottomWidth:1, borderBottomColor:'#D7DBEC'}}>
                        <View style={{width:60, height:60, backgroundColor:'#60CFE3', borderRadius:30, alignItems:'center', justifyContent: 'center', marginRight:20}}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#FFFFFF'}}>D-999</Text>
                        </View>
                        <View>
                            <View style={{flexDirection:'row', alignItems:'center', marginBottom:-8, marginTop:12}}>
                                <Image source={require('../../assets/calen.png')} style={{width:25, height:25, marginRight:10}} />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14}}>2021??? 7??? 6??? (???)</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', marginBottom:-8}}>
                                <Image source={require('../../assets/clock.png')} style={{width:25, height:25, marginRight:10}} />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14}}>?????? 3:00</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center', marginBottom:8}}>
                                <Image source={require('../../assets/note.png')} style={{width:25, height:25, marginRight:10}} />
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14}}>??????????????????</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.case4}>
                <View style={styles.elem}>
                    <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>?????? ?????? ??????</Text>
                    <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24}}>Inbody</Text>
                    <View style={{flexDirection:'row', alignItems:'center', padding:10,justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10}}>
                        <Image source={require('../../assets/Larrow.png')} style={{width:15, height:20}} />
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}>2021.04.21</Text>
                            <Image source={require('../../assets/bar.png')} style={{width:15, height:20, marginLeft:5, marginRight:5}} />
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}>11:30</Text>
                        </View>
                        <Image source={require('../../assets/Rarrow.png')} style={{width:19, height:24}} />
                    </View>
                    <View style={{justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10, marginTop:20, padding:10, paddingRight:25, paddingLeft:20}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000', marginBottom: -15}} >??????</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar2.png')} style={{width:170, height:35}} />
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}><Text style={{fontSize:20, color:'#000000',fontFamily:'NotoSansKR-Bold'}}>55.0</Text>kg</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar3.png')} style={{width:200, height:15}} />
                            <Text>- 0.0</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10, marginTop:20, padding:10, paddingRight:25, paddingLeft:20}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000', marginBottom: -15}} >????????????</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar2.png')} style={{width:170, height:35}} />
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}><Text style={{fontSize:20, color:'#000000',fontFamily:'NotoSansKR-Bold'}}>55.0</Text>kg</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar3.png')} style={{width:200, height:15}} />
                            <Text>- 0.0</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10, marginTop:20, padding:10, paddingRight:25, paddingLeft:20}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000', marginBottom: -15}} >????????????</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar2.png')} style={{width:170, height:35}} />
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}><Text style={{fontSize:20, color:'#000000',fontFamily:'NotoSansKR-Bold'}}>55.0</Text>kg</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/bar3.png')} style={{width:200, height:15}} />
                            <Text>- 0.0</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10, marginTop:20, padding:10, paddingRight:25, paddingLeft:20, backgroundColor:'#F5F6FA'}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000', marginBottom: -15}} >BMI</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom: -5}}>
                            <Image source={require('../../assets/colorBar.png')} style={{width:170, height:40}} />
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}><Text style={{fontSize:20, color:'#000000',fontFamily:'NotoSansKR-Bold'}}>55.0</Text>kg</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/colorBar2.png')} style={{width:200, height:15}} />
                            <Text>- 0.0</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'space-around', borderWidth:1, borderColor:'#f2f0f0', borderRadius:10, marginTop:20, padding:10, paddingRight:25, paddingLeft:20, backgroundColor:'#F5F6FA'}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, color:'#000000', marginBottom: -15}} >????????????</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom: -5}}>
                            <Image source={require('../../assets/colorBar.png')} style={{width:170, height:40}} />
                            <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14, color:'#808080'}}><Text style={{fontSize:20, color:'#000000',fontFamily:'NotoSansKR-Bold'}}>55.0</Text>kg</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <Image source={require('../../assets/colorBar2.png')} style={{width:200, height:15}} />
                            <Text>- 0.0</Text>
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={styles.case3} >
                <View style={styles.elem}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>?????? ????????????</Text>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24}}>????????????/??????</Text>
                        </View>
                        <Image source={require('../../assets/bigarrow.png')} style={{width:25, height:25}} />
                    </View>
                    <CustomButton title="????????????"></CustomButton>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:'#F5F6FA', marginTop:20, borderTopRightRadius:15, borderTopLeftRadius:15, padding:5}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, paddingLeft:10}}>2021??? 7??? 1???</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={{backgroundColor:'#F17662', borderRadius:20, justifyContent:'center',paddingLeft:10, paddingRight:10, height:30, marginRight:11}}>
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:13, color:'#FFFFFF'}}>???????????????</Text>
                            </View>
                            <Image source={require('../../assets/carrow.png')} style={{width:21, height:19}} />
                        </View>
                    </View>
                    <View style={{padding:15, paddingTop:8, borderWidth:1, borderColor:'#E6E9F4', borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14}}>????????? ?????? ?????????. ???????????? ????????? ????????? ?????? ?????????. ???????????? ????????? ????????? ?????? ?????????. ???????????? ????????? ?????????...</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:'#F5F6FA', marginTop:20, borderTopRightRadius:15, borderTopLeftRadius:15, padding:5}}>
                        <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, paddingLeft:10}}>2021??? 7??? 1???</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={{backgroundColor:'#60CFE3', borderRadius:20, justifyContent:'center',paddingLeft:10, paddingRight:10, height:30, marginRight:11}}>
                                <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:13, color:'#FFFFFF'}}>????????????</Text>
                            </View>
                            <Image source={require('../../assets/carrow.png')} style={{width:21, height:19}} />
                        </View>
                    </View>
                    <View style={{padding:15, paddingTop:8, borderWidth:1, borderColor:'#E6E9F4', borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                        <Text style={{fontFamily:'NotoSansKR-Regular', fontSize:14}}>????????? ?????? ?????????. ???????????? ????????? ????????? ?????? ?????????. ???????????? ????????? ????????? ?????? ?????????. ???????????? ????????? ?????????...</Text>
                    </View>

                </View>
            </View>

            <View style={styles.case3} >
                <View style={styles.elem}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16, color:'#6765E9', marginBottom:-30}}>????????????</Text>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:24}}>???????????????</Text>
                        </View>
                        <Image source={require('../../assets/bigarrow.png')} style={{width:25, height:25}} />
                    </View>
                    <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:20, marginTop:-10}}>????????? 09:00 ~ 18:00</Text>
                    <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:14, marginTop:-17}}>?????? ????????? ????????? 91 ???????????? 12???</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={{backgroundColor:'#DDE1F5', borderRadius:20, justifyContent:'center',paddingLeft:10, paddingRight:10, height:30, marginRight:5}}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:13, color:'#31313D'}}>????????????</Text>
                        </View>
                        <View style={{backgroundColor:'#DDE1F5', borderRadius:20, justifyContent:'center',paddingLeft:10, paddingRight:10, height:30, marginRight:5}}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:13, color:'#31313D'}}>?????? ????????????</Text>
                        </View>
                        <View style={{backgroundColor:'#DDE1F5', borderRadius:20, justifyContent:'center',paddingLeft:10, paddingRight:10, height:30, marginRight:5}}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:13, color:'#31313D'}}>???????????????</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default SeegeneClinick;
