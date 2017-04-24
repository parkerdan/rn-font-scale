import {Dimensions,PixelRatio} from 'react-native';
const {height,width } = Dimensions.get('window');
export default function scaleFont(currentFont){
 // console.log(height,width)
 let devRatio = PixelRatio.get();
 let factor = (((width*devRatio)/320)+((height*devRatio)/640))/2.0;
 let maxFontDifferFactor = 5; //the maximum pixels of font size we can go up or down
 // console.log("The factor is: "+factor);
 if (width > 500 && height > 800) {
   return currentFont * 2
 }else if(factor<=1){
   return currentFont-float2int(maxFontDifferFactor*0.3);
 }else if((factor>=1) && (factor<=1.6)){
   return currentFont-float2int(maxFontDifferFactor*0.1);
 }else if((factor>=1.6) && (factor<=2)){
   return currentFont;
 }else if((factor>=2) && (factor<=3)){
   return currentFont+float2int(maxFontDifferFactor*0.65);
 }else if (factor>=3){
   return currentFont+float2int(maxFontDifferFactor);
 }

}

function float2int (value) {
 return value | 0;
}
