part=[];
array[0]='H';
array[1]='GE游戏顺位由国王位置决定,数字最小板块上的国王先动。';
array[2]='G轮到你时，拿取当前列自己国王脚下的板块，然后把国王放到另一列的板块上(这决定了你';
array[3]='O下回合';
array[4]='GE的顺位）。2人游戏时，玩家虽然操纵2个国王，但是需分开拼接。';
part[0]=generate(array);
list_line = '';
array=[];
array[0]='S拼图规则：';
array[1]='O1、';
array[2]='GE起始板块是百搭，什么板块都可以跟它连。';
array[3]='O2、';
array[4]='GE新放置板块和原来的地貌必须相同';
array[5]='O3、';
array[6]='GE板块范围不能超过5x5';
array[7]='O4、';
array[8]='GE新放的板块无法放置就弃掉';
array[9]='SE';
part[1]=generate(array);
list_line = '';
array=[];
array[0]='GE所有玩家都拼完自己的板块或弃掉后，本回合结束。';
array[1]='G2/3/4人游戏时，再翻开';
array[2]='O4/3/4';
array[3]='GE张新地图板块，按照背面数字大小升序排成一列，完成后进入下一回合。';
part[2]=generate(array);
list_line = '';
array=[];
