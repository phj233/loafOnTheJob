const {segment} = require('oicq');
const request = require('sync-request');
const loafJob='https://api.j4u.ink/proxy/remote/moyu.json';
const loafJob2='http://d.jiek.top/vJfV';
const loafJob3='https://api.vvhan.com/api/moyu';

const cmd='摸鱼';

function returnImgurl(apiurl){
    var img = request('GET',apiurl);
    var returnData = JSON.parse(img.getBody());
    return returnData.data.moyu_url;
}
function retrunImg(){
    let imgmoyu=segment.image(returnImgurl(loafJob));
    return imgmoyu;
}

class loafonjob extends NIL.ModuleBase{
    onStart(api){
        api.logger.info('摸鱼 by phj233~~');
        api.listen('onGroupMessageReceived',(e)=>{
            if(e.raw_message==cmd){
                e.reply([`今日摸鱼人日历:`,retrunImg()],`~`);
            }
        });
    }
    onStop(){
    }
   }
   
   module.exports = new loafonjob
