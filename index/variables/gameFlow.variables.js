part=[];
array[0]='H';
array[1]='OE每轮时长：';
array[2]='G玩家要进行3轮的讨论，两个房间独立讨论。第一轮讨论';
array[3]='O3';
array[4]='G分钟，第二轮';
array[5]='O2';
array[6]='G分钟，第三轮';
array[7]='O1';
array[8]='GE分钟。如果觉得讨论时间太短，请查看胜利条件->进阶规则。';
array[9]='GE每轮中玩家可以自由讨论，但是要遵守三大基本准则';
part[0]=generate(array);
list_line = '';
array=[];
array[0]='S三大基本准则：';
array[1]='O1、';
array[2]='GE必须呆在自己的房间，不能走来走去';
array[3]='O2、';
array[4]='GE不能偷听、偷窥另一个房间（意念杀人也不可以），也不能朝另一个房间大喊大叫、做手势等等';
array[5]='O3、';
array[6]='GE不能交换角色卡，不能把自己角色卡给别人看';
array[7]='SE';
part[1]=generate(array);
list_line = '';
array=[];
array[0]='G两个房间在第';
array[1]='O1';
array[2]='G轮讨论阶段，必须各票选出';
array[3]='O1';
array[4]='GE名队长。';
part[2]=generate(array);
list_line = '';
array=[];
array[0]='S队长职责：';
array[1]='GE队长负责选出1名（或多名）流放者，流放者需要被送到对面的房间去，队长不能流放自己。';
array[2]='GE流放人数和轮次：';
array[3]='O6~10';
array[4]='G人局 第1/2/3轮流放';
array[5]='O1/1/1';
array[6]='GE人';
array[7]='O11~21';
array[8]='G人局 第1/2/3轮流放';
array[9]='O2/1/1';
array[10]='GE人';
array[11]='O22+';
array[12]='G人局 第1/2/3轮流放';
array[13]='O3/2/1';
array[14]='GE人';
array[15]='GE大部分情况下，队长在第一轮选出后，就不会再更改，除非以下2种事情发生';
array[16]='G1、';
array[17]='O转让队长';
array[18]='GE：当前队长可以将其队长身份转让给同房间的其他玩家。被转让的玩家可以选择拒绝';
array[19]='G2、';
array[20]='O弹劾队长';
array[21]='GE：非队长玩家可以随时要求弹劾当前队长，并提出1名队长候选人（可以推荐自己），然后全体进行投票决定是否更换队长';
array[22]='SE';
part[3]=generate(array);
list_line = '';
array=[];
array[0]='GE当一轮的讨论时间结束，进入结束阶段。';
part[4]=generate(array);
list_line = '';
array=[];
array[0]='S结束阶段:';
array[1]='G结束阶段包括';
array[2]='O3';
array[3]='GE个步骤：';
array[4]='O1、';
array[5]='GE队长选出流放者(人数见队长职责)，流放结果仅仅在自己的房间宣布，无需对对面房间宣布。';
array[6]='O2、';
array[7]='GE两个房间的队长，在房间中间见面，双方见面后，立刻开始下一轮讨论计时(除非是第三轮结束)';
array[8]='O3、';
array[9]='GE两个房间的流放者前往对面的房间';
array[10]='SE';
part[5]=generate(array);
list_line = '';
array=[];
