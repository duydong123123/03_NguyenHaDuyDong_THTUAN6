import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
            source={require("./assets/vs_blue.png")}
            style={[styles.Image, { width: 301, height: 361, }]}
          />
      <StatusBar style="auto" />
      <view style={styles.containerOneText}>
        <Text style={styles.OneText}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </view >
      <View style={styles.star}>
          <Image source={require("./assets/star.png")}style={[styles.Image, { width: 23, height: 25 }]}/>
          <Image source={require("./assets/star.png")}style={[styles.Image, { width: 23, height: 25 }]}/>
          <Image source={require("./assets/star.png")}style={[styles.Image, { width: 23, height: 25 }]}/>
          <Image source={require("./assets/star.png")}style={[styles.Image, { width: 23, height: 25 }]}/>
          <Image source={require("./assets/star.png")}style={[styles.Image, { width: 23, height: 25 }]}/>
          <text style={styles.textstar}>(Xem 828 đánh giá)</text>
      </View>
      <view style={styles.containerTwoText}>
        <Text style={styles.So1}>1.790.000 đ</Text>
        <Text style={styles.So2}>1.790.000 đ</Text>
      </view >
      <view style={styles.containerThreeText}>
        <Text style={{color:'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      </view >
      <view style={styles.button}>
      <Pressable style={{width:4,height:40,backgroundColor:'pink',}}>
        <text style={{textAlign:'center',marginTop:10,}}>4 MÀU-CHỌN MÀU</text>
        <image  source={require("./assets/Vector.png")}style={[styles.Image, { width: 11.5, height: 14 }]}></image>
        </Pressable>
      </view>
      <view>
        <Pressable style={{width:300,height:40,backgroundColor:'red',}}>
        <text style={{textAlign:'center',marginTop:10,}}>CHỌN MUA</text>
        </Pressable>
        
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star:{
    flexDirection:'row',
    textAlign:'right',
    marginRight:6.5,
  },
  textstar:{
  marginLeft:30,
  width:135,
  height:18,
  top:386,
  left:170,
  marginTop:5,
  },
  containerTwoText:{
    marginBottom:10,
    marginRight:40,
  },
  So1:{
  marginBottom:30,
  },
  So2:{
  marginLeft:85,
  },
  containerThreeText:{
    marginRight:98,
  },
  
  
});
