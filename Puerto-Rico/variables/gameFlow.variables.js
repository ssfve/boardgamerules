part=[];
array[0]='H';
array[1]='S游戏将进行多轮（大约15轮），每一轮流程如下：';
array[2]='G拥有';
array[3]='O总督卡';
array[4]='G的游戏者开始。他为自己选择1个角色卡，正面向上放在自己面前，然后';
array[5]='O他';
array[6]='G立刻成为该角色行动的';
array[7]='O第1个';
array[8]='G执行者。';
array[9]='G然后是他左侧的邻居执行';
array[10]='O该角色';
array[11]='GE的行动，以此类推，直到所有人都执行过1次该行动为止。';
array[12]='G随后轮到总督左侧的邻居。他从剩下的角色中为自己选取一个，并把此卡片放在自己面前。从';
array[13]='O他';
array[14]='GE开始（而不是从总督开始！），每个人依次执行此卡上的行动。 ';
array[15]='G接下来是他左侧的邻居，选取角色并执行行动，以此类推。';
array[16]='GE如果所有人都已经获得1个角色并完成了行动，本轮即告结束。';
array[17]='SE';
part[0]=generate(array);
list_line = '';
array=[];
array[0]='S基本规则：';
array[1]='G- 角色卡的一面是一种';
array[2]='O特权';
array[3]='GE，只对选取它的游戏者有效，另一面是通用行动，每个游戏者轮流执行。（例外：淘金者）';
array[4]='GE- 轮到一个游戏者选取角色的时候，他不能选择放弃。但他可以选择一个角色但随后并不进行任何行动。';
array[5]='GE- 游戏者可以自愿执行角色卡的行动（例外：船长）。如果一个游戏者不能或不愿执行某个行动，他将被跳过。';
array[6]='GE- 在一轮结束前，角色卡将一直保留在选取它的游戏者面前。本轮它不能再被其他游戏者获取。';
array[7]='SE';
part[1]=generate(array);
list_line = '';
array=[];
array[0]='S拓荒者阶段（获得种植园）';
array[1]='G选取';
array[2]='O拓荒者';
array[3]='G的人，可以随即获得';
array[4]='O1';
array[5]='G个';
array[6]='O采石场';
array[7]='G牌片（他的特权）或者正面向上的';
array[8]='O1';
array[9]='G个种植园牌片，将其放在他游戏面板的任意空白地上。';
array[10]='G然后其他游戏者依次获得';
array[11]='O1';
array[12]='GE个正面向上的种植园牌片并放置在自己的岛上。';
array[13]='GE最后拓荒者把未被取走的种植园牌片正面向上放进弃牌堆，然后从新牌堆里翻出新的种植园牌片，其数量比参加游戏者的人数多1个。';
array[14]='G特殊规则：';
array[15]='O建筑介绍->农庄';
array[16]='G、';
array[17]='O建筑介绍->建筑小屋';
array[18]='G和';
array[19]='O建筑介绍->收容院';
array[20]='GE。';
array[21]='GE如果没有足够的种植园牌片以供拓荒者补充的话，他要把弃牌堆里的牌片洗好，并把这些作为新的新牌堆。如果仍然没有足够牌片可用的话，在下一个拓荒者阶段中，部分游戏者只能空手而回。';
array[22]='GE如果某个游戏者岛上的所有12块土地已被占满，他就不能在拓荒者阶段获得新的牌片。';
array[23]='GE假如公共堆的采石场被用光，那么拓荒者的特权和建筑小屋就都无效。';
array[24]='SE';
part[2]=generate(array);
list_line = '';
array=[];
array[0]='S市长阶段（获得拓荒者）';
array[1]='G选择了市长的人，立即可以从公共堆（而不是从拓荒船上！）里拿到';
array[2]='O1';
array[3]='G个拓荒者（他的特权）。随后他将拓荒船上的拓荒者分配给所有人，从';
array[4]='O他自己';
array[5]='G开始：每个游戏者依次获得';
array[6]='O1';
array[7]='GE个拓荒者，直到拓荒船空载为止。';
array[8]='G每个游戏者可以把这些新的拓荒者，以及之前各轮获得的所有拓荒者，随意地在他的牌片上';
array[9]='O重新分配';
array[10]='GE。';
array[11]='G如果一个游戏者无法安置他所有拓荒者的话，他可以把多余的标志物放在圣胡安城的';
array[12]='O“中转站”';
array[13]='GE。它们可以待在那里，直到（在稍后的另一个市长阶段中！）牌片上有足够的空圆放置它们为止。';
array[14]='O最后一步';
array[15]='GE，市长还需要处理对新拓荒者的需求：所有游戏者的建筑物上每有一个空白的圆（种植园或采石场上的空白圆不算！），就把1个拓荒者从公共堆被放到拓荒船上。';
array[16]='GE注意：但是放在船上的拓荒者数目最少也要等于游戏者人数。如果某次忘记将新的拓荒者放上拓荒船，事后只需要补充到最小数量。';
array[17]='GE牌片（种植园、采石场以及建筑）上标有1到3个圆。每1个此类圆环上都能且只能放置1个拓荒者标志物。1个牌片上至少有1个拓荒者，才能算做被占据。只有被占据的牌片才能产生功用，无人占据的牌片无效！';
array[18]='在市长阶段，所有游戏者都可以同时自己动手分配拓荒者。如有异议，可以采用下面流程：首先由市长分配他的拓荒者，然后是下一个游戏者，以此类推。';
array[19]='GE如果公共堆里的拓荒者用光，市长就不能再使用他的特权。';
array[20]='GE说明：任何游戏者都不能“自愿”将拓荒者放进圣胡安的“中转站”；只要有空位能够占据，他就必须占据。但这只能在市长阶段之内进行。';
array[21]='SE';
part[3]=generate(array);
list_line = '';
array=[];
array[0]='S建筑师阶段（修建建筑物）';
array[1]='G选择建筑师的人，可以立刻建造1个建筑物，只要他向银行支付建筑上所标出的价格（第一个圆里的数字）减去';
array[2]='O1';
array[3]='GE个杜布隆（ 他的特权），他就可以把该建筑放置在12个城区中任意的空白处。';
array[4]='G如果是大型建筑，他需要2块相邻的空白地。之后其他游戏者也可以轮流修建';
array[5]='O1';
array[6]='GE个建筑物。任何游戏者都不允许建造多于1个建筑物。';
array[7]='G每个有人占据的采石场，都会将该游戏者的建造费用降低';
array[8]='O1';
array[9]='G个杜布隆。不过游戏者修建第1/2/3/4列中的建筑时，最多只能有';
array[10]='O1/2/3/4';
array[11]='GE个采石场起效。';
array[12]='G特殊规则：';
array[13]='OE建筑介绍->大学';
array[14]='GE即使建筑师没有造任何建筑，他也不能将那1个杜布隆（特权）取走。';
array[15]='GE任何人都不能修建多于12个城区的建筑。只有1个空地的人，不能修建大型建筑物。';
array[16]='SE';
part[4]=generate(array);
list_line = '';
array=[];
array[0]='S监管阶段（生产货物）';
array[1]='G选择';
array[2]='O监管';
array[3]='GE的人从公共堆里拿取与自己生产环节相对应的货物，并公开放在自己游戏版面的罗盘上。随后其他游戏者轮流获得他们的货物。';
array[4]='O最后一步';
array[5]='G，监管从公共堆中为自己再多拿取';
array[6]='O1';
array[7]='GE个标志物（他的特权），该货物必须属于他刚刚生产过的货物中的1种。';
array[8]='G特殊规则：';
array[9]='OE建筑介绍->工厂';
array[10]='G如果公共堆里缺少某种货物，那么相应的游戏者就不获得任何东西。';
array[11]='GE如果监管没有生产任何东西，那么他也不能获得特权货物。';
array[12]='SE';
part[5]=generate(array);
list_line = '';
array=[];
array[0]='S商人阶段（出售货物）';
array[1]='G选择';
array[2]='O商人';
array[3]='G的人，可以立即将1个货物出售给商会。';
array[4]='G他因此获得上面标注的价格（0-4杜布隆）加';
array[5]='O1';
array[6]='G个杜布隆（他的特权）。随后其他每个游戏者都可以依次出售货物，数量最多为';
array[7]='O1';
array[8]='GE个，价格按照标注。当每个人都轮过一次之后或者商会被填满之后，商人阶段结束。';
array[9]='G商会只收购最多';
array[10]='O4';
array[11]='G件货物。 当被填满以后，后来的游戏者就不能再出售货物。商会只收购';
array[12]='O不同';
array[13]='GE种类的货物（例外：分商会）。';
array[14]='O最后一步';
array[15]='G,如果商会已经被4个货物填满，由商人清空商会。清空时货物分类放回公共堆。';
array[16]='GE如果商会里只有3件或更少的货物，它们会被保留在商会中。（于是在下一次的商人阶段中，出售会变得更困难，因为商会里已经有了某种货物，它的收购能力就受到了限制。）';
array[17]='G特殊规则：';
array[18]='O建筑介绍->小市场大厅';
array[19]='G，';
array[20]='O建筑介绍->大市场大厅';
array[21]='G以及';
array[22]='O建筑介绍->分商会';
array[23]='GE。';
array[24]='GE如果商人没有出售货物，那么他也不能获得那额外的1个杜布隆（特权）。';
array[25]='GE在商会“出售”玉米是完全许可的，尽管这并不会带来任何收入。';
array[26]='SE';
part[6]=generate(array);
list_line = '';
array=[];
array[0]='S船长阶段（装载货物）';
array[1]='G船长首先开始装货，船长第';
array[2]='O1';
array[3]='GE次装货时额外获得1个胜利分（他的特权）。接着是下一个行动的游戏者。';
array[4]='G注意：在船长阶段一个游戏者可能被轮到多次。在此要注意的是，每当轮到一个游戏者送货时，如果他能够装货就';
array[5]='O必须';
array[6]='G装货。但每次只能装';
array[7]='O1';
array[8]='GE类货物。当无人可以继续装货时，船长阶段才结束。';
array[9]='O最后一步';
array[10]='G，由船长将所有装满的运输船完全清空，其中的货物重新分类放回到公共堆里。未装满的船只原封不动。';
array[11]='GE（于是游戏者们在下一次船长阶段明显会受到更多的限制，因为即使货物的种类相同，船上的装载空间也是有限的。 ）';
array[12]='G船长只获得';
array[13]='O1';
array[14]='GE个额外的胜利分数，即便他装载了多种货物。如果他没有装货，则不能获得额外的胜利分数。';
array[15]='SE';
part[7]=generate(array);
list_line = '';
array=[];
array[0]='S装货条件：';
array[1]='G每条运输船只能装载';
array[2]='O1';
array[3]='GE类货物。已由1条船装载的货物，不能再由其他运输船装载。';
array[4]='G已满的船不能再装任何货物。当前行动的人只要可以装货就';
array[5]='O必须';
array[6]='GE装货，但每次只能装1类货物。';
array[7]='G装货者必须提供';
array[8]='O最大货物量';
array[9]='G，即如果对应的船上仍然有装载货物的位置，那么他就不能保留此种货物。';
array[10]='GE如果一个游戏者有多种货物可供装载，他可以自由选择提供哪种。（他并不一定要选择供货数量最大的那种。）';
array[11]='SE';
part[8]=generate(array);
list_line = '';
array=[];
array[0]='S胜利分数：';
array[1]='GE游戏者每提供1个货物，就获得1个胜利分，以一个1分的计分圆片表示。';
array[2]='GE胜利分数可以扣放，即反面向上摆在罗盘上。游戏者们应该不时地把他们1分的计分圆片换成5分的。';
array[3]='SE';
part[9]=generate(array);
list_line = '';
array=[];
array[0]='S清仓:';
array[1]='GE在没有人能装货之后，需要检查每个游戏者是否能保存尚位于罗盘上的这些货物。';
array[2]='G原则上每个游戏者总可以保存';
array[3]='O1';
array[4]='GE个货物标志物。所有超出的货物必须保存在被占据的存储区里（大小仓库）。否则游戏者就必须将他不能存放的货物无偿放回公共堆里。';
array[5]='G特殊规则：';
array[6]='O建筑介绍->小仓库';
array[7]='G、';
array[8]='O建筑介绍->大仓库';
array[9]='G、';
array[10]='O建筑介绍->港口';
array[11]='G和';
array[12]='O建筑介绍->船坞';
array[13]='GE。';
array[14]='G如果一个游戏者不能保存他所有的货物，他可以选择保留哪些、把哪些放回公共堆。';
array[15]='GE并不是在每个阶段结束时都需要检查游戏者是否有足够的仓库保存货物，只有在每个船长阶段结束时才需要。';
array[16]='SE';
part[10]=generate(array);
list_line = '';
array=[];
array[0]='S淘金者（获得杜布隆）';
array[1]='G选择';
array[2]='O淘金者';
array[3]='G角色卡的人，不造成任何公共行动，而只有特权：从银行得到';
array[4]='O1';
array[5]='GE杜布隆。';
array[6]='SE';
part[11]=generate(array);
list_line = '';
array=[];
array[0]='S新的一轮……';
array[1]='GE等到最后一个游戏者也选择了一个角色，并且所有人都实行了相应的行动，一轮结束。';
array[2]='G现在需要从银行里拿出';
array[3]='O3';
array[4]='G个杜布隆，在3张未使用过的角色卡上各放';
array[5]='O1';
array[6]='GE个。这些角色在下回合中会更有吸引力，因为它们除了本身的特权之外还额外附赠1个或几个杜布隆。';
array[7]='G最后，所有其他的角色卡要放回存放面板旁边。总督卡交给前总督';
array[8]='O左侧';
array[9]='GE的游戏者。新总督开始下一轮，由他挑选角色卡开始。';
array[10]='SE';
part[12]=generate(array);
list_line = '';
array=[];
