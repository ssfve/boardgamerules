part=[];
array[0]='H';
array[1]='G游戏只进行';
array[2]='O1';
array[3]='G轮，只有';
array[4]='O3';
array[5]='GE个阶段：';
array[6]='O夜晚阶段';
array[7]='GE： 所有玩家按照其身份依次被唤醒，并行动。';
part[0]=generate(array);
list_line = '';
array=[];
array[0]='S唤醒顺序';
array[1]='G1. ';
array[2]='O化身幽灵';
array[3]='GE：观看一名其他玩家的卡牌，你变成这个角色。如果你看到预言家、强盗、捣蛋鬼或酒鬼卡牌，则立刻执行其行动。';
array[4]='G1a. ';
array[5]='O化身爪牙';
array[6]='GE：狼人竖起大拇指给化身爪牙看。';
array[7]='G2. ';
array[8]='O狼人';
array[9]='GE：寻找其他狼人。如果只有一个狼人，可以查看一张中间的卡牌。';
array[10]='G3. ';
array[11]='O爪牙';
array[12]='GE: 狼人竖起大拇指给爪牙看。';
array[13]='G4. ';
array[14]='O守夜人';
array[15]='GE: 寻找其他守夜人。';
array[16]='G5. ';
array[17]='O预言家';
array[18]='GE: 可以查看一名其他玩家卡牌，或者两张中间卡牌。';
array[19]='G6. ';
array[20]='O强盗';
array[21]='GE：可以交换自己和一名其他玩家卡牌，并观看自己新的卡牌。';
array[22]='G7. ';
array[23]='O捣蛋鬼';
array[24]='GE: 可以交换两名其他角色的卡牌。';
array[25]='G8. ';
array[26]='O酒鬼';
array[27]='GE: 用自己的卡牌和一张中间卡牌交换。';
array[28]='G9. ';
array[29]='O失眠者';
array[30]='GE: 观看自己的卡牌。';
array[31]='G9a.';
array[32]='O化身失眠者';
array[33]='GE: 观看自己的卡牌。';
array[34]='SE';
part[1]=generate(array);
list_line = '';
array=[];
array[0]='O白天阶段';
array[1]='G： 大家有(';
array[2]='O游戏人数-1';
array[3]='GE)分钟自由讨论时间。';
array[4]='O投票阶段';
array[5]='GE： 所有人同时投票后翻开身份，结算胜负。';
part[2]=generate(array);
list_line = '';
array=[];
array[0]='S任意时刻';
array[1]='O村民';
array[2]='GE: 无特效。';
array[3]='O猎人';
array[4]='GE: 如果他死亡，则他所指的玩家也死亡。';
array[5]='O皮匠';
array[6]='GE: 当他死亡时获胜。';
array[7]='SE';
part[3]=generate(array);
list_line = '';
array=[];
array[0]='S其他规则';
array[1]='GE - 任何玩家不能投票给自己，必须投票给1名其他玩家。';
array[2]='G - 处死所有获得并列最高票数的玩家，前提是被处死玩家';
array[3]='O至少';
array[4]='G具有';
array[5]='O2';
array[6]='GE票。如果最高票不足2票，则没有人被处决。';
array[7]='GE - 化身幽灵属于她看到的牌所属的阵营。如果夜间她的牌移动了，则这张牌的新阵营也随之移动。如果化身幽灵原本在中央，则她属于村庄阵营。投票结束后，原本的化身幽灵必须公布这张的身份。';
array[8]='SE';
part[4]=generate(array);
list_line = '';
array=[];
