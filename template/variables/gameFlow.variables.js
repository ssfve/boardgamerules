part=[];
array[0]='H';
array[1]='G玩家确认身份牌，然后进入天黑阶段（只有';
array[2]='O1';
array[3]='GE次），由任意玩家闭眼大声宣读并执行以下流程：';
part[0]=generate(array);
list_line = '';
array=[];
array[0]='S天黑阶段：';
array[1]='G(1) ';
array[2]='O梅林';
array[3]='G开眼，除了';
array[4]='O莫德雷德';
array[5]='GE外所有坏人闭眼举手(即莫甘娜、奥伯伦、刺客、爪牙闭眼举手让梅林验人)';
array[6]='G(2) 除了';
array[7]='O奥伯伦';
array[8]='GE以外的坏人睁眼，互相辨认同伙（即莫德雷德、莫甘娜、刺客、爪牙开眼互认）';
array[9]='G(3) ';
array[10]='O派西维尔';
array[11]='G开眼，';
array[12]='O梅林';
array[13]='G和';
array[14]='O莫甘娜';
array[15]='GE闭眼举手（即梅林、莫甘娜闭眼举手让派西维尔验人）';
array[16]='SE';
part[1]=generate(array);
list_line = '';
array=[];
array[0]='GE所有人睁眼，进入天亮阶段，从现任队长开始做任务：';
array[1]='GE随机选择一个玩家担任队长（若非第一次游戏，则以上局最后一个队长的左手玩家为首任队长）';
array[2]='GE队长根据5轮任务规定的人数，选择相应数量的玩家（可包含自己）派发“虚拟任务卡”。';
part[2]=generate(array);
list_line = '';
array=[];
array[0]='S任务人数要求：';
array[1]='G任务为';
array[2]='O虚拟';
array[3]='GE任务，执行任务只需打出任务成败卡。';
array[4]='O5';
array[5]='GE人：2-3-2-3-3（出现一个任务失败即任务失败）';
array[6]='O6';
array[7]='GE人：2-3-4-3-4（出现一个任务失败即任务失败）';
array[8]='O7';
array[9]='GE人：2-3-3-4-4（第一个4人任务需要出现两个任务失败才判定为失败，其余只需要一个）';
array[10]='O8-10';
array[11]='GE人：3-4-4-5-5（第一个5人任务需要出现两个任务失败才判定为失败，其余只需要一个）';
array[12]='SE';
part[3]=generate(array);
list_line = '';
array=[];
array[0]='S决议及执行：';
array[1]='GE全体玩家就当回合持有“虚拟任务卡”（队长派发的）的玩家，进行发言和投票，表态及表决本次“任务”执行或延迟。';
array[2]='G从队长的右手边开始逆时针发言，队长可选择第一个发言，或者最后一个发言。';
array[3]='G发言按顺序仅一轮（禁止插话、对话），完毕后，所有玩家';
array[4]='O投票';
array[5]='G选择同意或者反对本次“任务”的执行，';
array[6]='O不可弃权';
array[7]='GE。';
array[8]='G所有玩家同时亮出答案，如同意人数超过玩家总数的一半，则任务可以执行，等于或者小于一半时，任务被延迟1次。';
array[9]='O任务延迟';
array[10]='G即本轮不执行“任务”，由下一位队长重新选择派发“虚拟任务卡”，但一局只能出现';
array[11]='O4';
array[12]='GE次延迟任务，此后（第5人）队长无论如何选择队员，任务强制执行。';
array[13]='SE';
part[4]=generate(array);
list_line = '';
array=[];
array[0]='S任务结果：';
array[1]='G执行任务时，持有“虚拟任务卡”的玩家从“任务成功/失败卡”中选择1个';
array[2]='O秘密';
array[3]='G给出，好人';
array[4]='O必须';
array[5]='G出“任务成功”，坏人可以选择出“任务成功”（';
array[6]='O伪装';
array[7]='G）或“任务失败”。';
array[8]='GE将结果牌洗混后公布，根据其中的“失败”牌数量来判断任务成败。';
array[9]='SE';
part[5]=generate(array);
list_line = '';
array=[];
array[0]='GE1次任务结束后，队长左手边的玩家成为下一任队长，负责主持下一次任务，如此不断重复直到游戏结束。';
part[6]=generate(array);
list_line = '';
array=[];
