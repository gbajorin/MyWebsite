angular.module('myApp').service('nlsService', [function(){
	var curLanguage = "EN"
	var subscribers = [];
	var languageStrings = {};
	// navigation
	languageStrings['About'] = 	 "About";
	languageStrings['Projects'] =  "Projects";
	languageStrings['Connect'] = "Connect";
	// footer
	languageStrings['Copyright'] = "Copyright";
	languageStrings['Location'] = "Boston,MA";
	// about
	languageStrings['AboutHeader'] = "Full Stack Engineer";
	languageStrings['Greeting'] = "Hi, I'm Garrett.";
	languageStrings['FirstFact'] = "Loyal Friend. Gamer. Engineer.";
	languageStrings['SecondFact'] = "Born in Connecticut, I ";
	languageStrings['ThirdFact'] = "I run to stay healthy although you will find me without my fruits and vegetables at the dinner table.";
	languageStrings['FourthFact'] = "I'm experienced writing front and back end web applications.";
	languageStrings['ClickConnect'] = "Click 'Connect' to get in touch today!";
	// projects
	languageStrings['ProjectTitle'] = "Down Memory Lane";
	languageStrings['PacMan'] = "PacMan";
	languageStrings['PacManDescription'] = "As part of the Association for Computing Machinery activities, yearly AI programming competitions are held.  In this iteration, we were charged with developing a pac man to collect the most coins before being consumed by the ghosts. More of a social project then personal, but still great to watch!";
	languageStrings['GoTA'] = "Game Of The Amazons";
	languageStrings['GoTADescriptionP1'] = "This game is played by moving queens across a chess board in an attempt to trap the other player.	After a queen visits a square, no piece is allowed to cross over or visit that square again.  Read up more on the ";
	languageStrings['GoTAWiki'] = "wiki";
	languageStrings['GoTADescriptionP2'] = " page here.  This project included	multi-threading, minimax-search, and evolutionary learning.";
	languageStrings['MIPS'] = "Mips Processor";	
	languageStrings['MIPSDescription'] = "Hardware can be just as eye opening as programming.  Take a look at an IF/ID state MIPS processor as it can take two instruction sets in at once and remove the wait step in all branch and jump calls.  33% performance increase in instruction execution over traditional MIPS architecture in best case.";	
	// connect
	languageStrings['ConnectHeader'] = "Get In Touch";
	languageStrings['LetterGreeting'] = "Hello Garrett,";
	languageStrings['SlimShady'] = "My name is ";
	languageStrings['ToEmail'] = " and I would like to send greetings from ";
	languageStrings['ToMessage'] = "I am connecting with you ";
	languageStrings['Message'] = "to tell you how awesome your website is!";
	languageStrings['Sincerely'] = "Sincerely,";
	languageStrings['NewFriend'] = "Your New Friend";
	languageStrings['ClickSend'] = "Send";
	languageStrings['ResponseValid'] = "I look forward to our new dialog!";
	languageStrings['ResponseInvalid'] = "Please check your provided information.";
	this.subscribe = function(subscription) {
		subscription();
		subscribers.push(subscription);
	};
	
	this.getString = function(stringName) {
		return languageStrings[stringName];
	}
	
	var updateStrings = function(){
		var index, updateFunction, length = subscribers.length;
		for(index = 0; index < length; index++){
			updateFunction = subscribers[index];
			updateFunction();
		}
	};
	
	this.changeLanguage = function(language){
		// TODO: make new objects for each language
		if(language === "EN" && language !== curLanguage){
			setAsEnglish();
		} else if(language == "CH" && language !== curLanguage){
			setAsChinese();
		}else if(language == "JP" && language !== curLanguage){
			setAsJapanese();
		}else if(language == "FR" && language !== curLanguage){
			setAsFrench();
		}
		curLanguage = language;	
	}
	// brute force for now: later read from json files, create dynamically
	var setAsEnglish = function(){
		// navigation
	languageStrings['About'] = 	 "About";
	languageStrings['Projects'] =  "Projects";
	languageStrings['Connect'] = "Connect";
	// footer
	languageStrings['Copyright'] = "Copyright";
	languageStrings['Location'] = "Boston,MA";
	// about
	languageStrings['AboutHeader'] = "Full Stack Engineer";
	languageStrings['Greeting'] = "Hi, I'm Garrett.";
	languageStrings['FirstFact'] = "Loyal Friend. Gamer. Engineer.";
	languageStrings['SecondFact'] = "Born in Connecticut, I ";
	languageStrings['ThirdFact'] = "I run to stay healthy although you will find me without my fruits and vegetables at the dinner table.";
	languageStrings['FourthFact'] = "I'm experienced writing front and back end web applications.";
	languageStrings['ClickConnect'] = "Click 'Connect' to get in touch today!";
	// projects
	languageStrings['ProjectTitle'] = "Down Memory Lane";
	languageStrings['PacMan'] = "PacMan";
	languageStrings['PacManDescription'] = "As part of the Association for Computing Machinery activities, yearly AI programming competitions are held.  In this iteration, we were charged with developing a pac man to collect the most coins before being consumed by the ghosts. More of a social project then personal, but still great to watch!";
	languageStrings['GoTA'] = "Game Of The Amazons";
	languageStrings['GoTADescriptionP1'] = "This game is played by moving queens across a chess board in an attempt to trap the other player.	After a queen visits a square, no piece is allowed to cross over or visit that square again.  Read up more on the ";
	languageStrings['GoTAWiki'] = "wiki";
	languageStrings['GoTADescriptionP2'] = " page here.  This project included	multi-threading, minimax-search, and evolutionary learning.";
	languageStrings['MIPS'] = "Mips Processor";	
	languageStrings['MIPSDescription'] = "Hardware can be just as eye opening as programming.  Take a look at an IF/ID state MIPS processor as it can take two instruction sets in at once and remove the wait step in all branch and jump calls.  33% performance increase in instruction execution over traditional MIPS architecture in best case.";	
	// connect
	languageStrings['ConnectHeader'] = "Get In Touch";
	languageStrings['LetterGreeting'] = "Hello Garrett,";
	languageStrings['SlimShady'] = "My name is ";
	languageStrings['ToEmail'] = " and I would like to send greetings from ";
	languageStrings['ToMessage'] = "I am connecting with you ";
	languageStrings['Message'] = "to tell you how awesome your website is!";
	languageStrings['Sincerely'] = "Sincerely,";
	languageStrings['NewFriend'] = "Your New Friend";
	languageStrings['ClickSend'] = "Send";
	languageStrings['ResponseValid'] = "I look forward to our new dialog!";
	languageStrings['ResponseInvalid'] = "Please check your provided information.";
	updateStrings();
	}
	
	var setAsChinese = function(){
		// navigation
	languageStrings['About'] = 	 "大约";
	languageStrings['Projects'] =  "工程";
	languageStrings['Connect'] = "接";
	// footer
	languageStrings['Copyright'] = "版权";
	languageStrings['Location'] = "马萨诸塞州波士顿";
	// about
	languageStrings['AboutHeader'] = "全栈工程师";
	languageStrings['Greeting'] = "嗨，我是加勒特。";
	languageStrings['FirstFact'] = "忠实的朋友。玩家。工程师。";
	languageStrings['SecondFact'] = "出生在康涅狄格州，我 ";
	languageStrings['ThirdFact'] = "我运行保持健康，尽管你会发现我没有我的水果和蔬菜在餐桌上。";
	languageStrings['FourthFact'] = "我有经验的写作前端和后端的Web应用程序。";
	languageStrings['ClickConnect'] = "点击“连接”今天取得联系！";
	// projects
	languageStrings['ProjectTitle'] = "掉电记忆里";
	languageStrings['PacMan'] = "吃豆";
	languageStrings['PacManDescription'] = "随着计算机协会活动的一部分，每年的AI程序设计竞赛举行。在本次迭代，我们负责开发的吃豆人被消耗鬼魂之前收集最硬币。更多的是社会的项目，然后个人，但仍有很大观看！";
	languageStrings['GoTA'] = "亚马逊棋";
	languageStrings['GoTADescriptionP1'] = "这个游戏是由整个棋盘移动皇后，试图套住其他播放器播放。经过女王访问一个方形，没有一件被允许越过或再次访问该广场。了解更多关于 ";
	languageStrings['GoTAWiki'] = "维基";
	languageStrings['GoTADescriptionP2'] = " 这里页面。该项目包括多线程，极小极大搜索和进化学习。";
	languageStrings['MIPS'] = "MIPS处理器";	
	languageStrings['MIPSDescription'] = "硬件可以是正眼开的节目。看一看的IF/ ID状态的MIPS处理器，因为它可以采取两种指令集在一次删除所有分支和跳转呼叫等待的一步。在指令执行比传统的MIPS架构在最好的情况下，33％的性能提升。";	
	// connect
	languageStrings['ConnectHeader'] = "保持联系";
	languageStrings['LetterGreeting'] = "您好加勒特，";
	languageStrings['SlimShady'] = "我的名字是 ";
	languageStrings['ToEmail'] = " 我想从送问候 ";
	languageStrings['ToMessage'] = "我连接与你 ";
	languageStrings['Message'] = "告诉你如何真棒你的网站！";
	languageStrings['Sincerely'] = "真诚的，";
	languageStrings['NewFriend'] = "你的新朋友";
	languageStrings['ClickSend'] = "发送";
	languageStrings['ResponseValid'] = "我期待着我们的新对话框！";
	languageStrings['ResponseInvalid'] = "请检查您所提供的信息。";
	updateStrings();
	}
	
	var setAsJapanese = function(){
		// navigation
	languageStrings['About'] = 	 "約";
	languageStrings['Projects'] =  "プロジェクト";
	languageStrings['Connect'] = "接続します";
	// footer
	languageStrings['Copyright'] = "著作権";
	languageStrings['Location'] = "マサチューセッツ州ボストン";
	// about
	languageStrings['AboutHeader'] = "フルスタックエンジニア";
	languageStrings['Greeting'] = "こんにちは、私はギャレットよ";
	languageStrings['FirstFact'] = "忠実な友人。ゲーマー。エンジニア。";
	languageStrings['SecondFact'] = "コネチカットで生まれ、私 ";
	languageStrings['ThirdFact'] = "あなたは夕食のテーブルで私の果物や野菜なしで私を見つけるだろうが、私は健康を維持するために実行します。";
	languageStrings['FourthFact'] = "私は経験豊富な書き込みフロントとバックエンドのWebアプリケーションです。";
	languageStrings['ClickConnect'] = "今日連絡を取るために「接続」をクリックしてください！";
	// projects
	languageStrings['ProjectTitle'] = "メモリーレーンダウン";
	languageStrings['PacMan'] = "パックマン";
	languageStrings['PacManDescription'] = "コンピューティング機械の活動のための協会の一環として、毎年AIプログラミング大会が開催されています。このフェーズでは、幽霊によって消費される前に、ほとんどのコインを収集するためにパックマンの開発に投入しました。見ていて、社会的プロジェクトの詳細、その後の個人が、それでも素晴らしいです！";
	languageStrings['GoTA'] = "アマゾンのゲーム";
	languageStrings['GoTADescriptionP1'] = "このゲームは、トラップを試み、他のプレイヤーにチェスボード全体で女王を移動させることによって再生されます。女王が広場を訪れた後、何の作品を横切るか、もう一度その広場を訪問することは許されません。もっと上まで読みます ";
	languageStrings['GoTAWiki'] = "ウィキ";
	languageStrings['GoTADescriptionP2'] = " こちらのページ。このプロジェクトは、マルチスレッド、ミニマックス·検索、進化的学習が含まれていました。";
	languageStrings['MIPS'] = "MIPSプロセッサ";	
	languageStrings['MIPSDescription'] = "ハードウェアだけで、プログラミングなどのアイ開口としてすることができます。それは一度に2つの命令セットを取り、すべてのブランチとジャンプの呼び出しで待機ステップを削除することができますようにIF/ ID状態MIPSプロセッサを見てみましょう。最良の場合には、伝統的なMIPSアーキテクチャ上の命令実行中の33％のパフォーマンス向上。"
	// connect
	languageStrings['ConnectHeader'] = "タッチでゲット";
	languageStrings['LetterGreeting'] = "こんにちはギャレット、";
	languageStrings['SlimShady'] = "私の名前は ";
	languageStrings['ToEmail'] = " と私はから挨拶を送りたいです ";
	languageStrings['ToMessage'] = "私はあなたと接続しています ";
	languageStrings['Message'] = "あなたのウェブサイトがどのように素晴らしいあなたを教えて！";
	languageStrings['Sincerely'] = "敬具";
	languageStrings['NewFriend'] = "あなたの新しい友人";
	languageStrings['ClickSend'] = "送信";
	languageStrings['ResponseValid'] = "私たちの新しいダイアログを楽しみにしています！";
	languageStrings['ResponseInvalid'] = "ご提供された情報を確認してください。";
	updateStrings();
	}
	
	var setAsFrench = function(){
		// navigation
	languageStrings['About'] = 	 "Sur";
	languageStrings['Projects'] =  "Projets";
	languageStrings['Connect'] = "Relier";
	// footer
	languageStrings['Copyright'] = "Droit d'auteur";
	languageStrings['Location'] = "Boston,MA";
	// about
	languageStrings['AboutHeader'] = "Plein Ingénieur Stack";
	languageStrings['Greeting'] = "Salut, je suis Garrett";
	languageStrings['FirstFact'] = "Ami Loyal. Gamer. Ingénieur.";
	languageStrings['SecondFact'] = "Né dans le Connecticut, je ";
	languageStrings['ThirdFact'] = "Je cours à rester en bonne santé bien que vous me trouverez sans mes fruits et légumes à la table du dîner.";
	languageStrings['FourthFact'] = "Je suis de retour applications web finaux expérimenté avant d'écriture et.";
	languageStrings['ClickConnect'] = "Cliquez sur 'Relier' entrer en contact dès aujourd'hui!";
	// projects
	languageStrings['ProjectTitle'] = "Down Memory Lane";
	languageStrings['PacMan'] = "PacMan";
	languageStrings['PacManDescription'] = "Dans le cadre de l'Association pour les activités Computing Machinery, concours de programmation AI annuels sont maintenus. Dans cette itération, nous avons été chargés d'élaborer un homme pac de collecter le plus de pièces avant d'être consommé par les fantômes. Plus d'un projet social puis personnelle, mais toujours grande à regarder!";
	languageStrings['GoTA'] = "Jeu des Amazones";
	languageStrings['GoTADescriptionP1'] = "Ce jeu se joue en déplaçant reines sur un échiquier dans une tentative pour piéger l'autre joueur. Après une reine visite une place, aucune pièce est autorisé à traverser ou visiter cette place à nouveau. Renseignez-vous davantage sur le ";
	languageStrings['GoTAWiki'] = "wiki";
	languageStrings['GoTADescriptionP2'] = " Cette page ici. Ce projet comprenait le multi-threading, minimax-recherche, et de l'apprentissage évolutif.";
	languageStrings['MIPS'] = "Mips processeur";	
	languageStrings['MIPSDescription'] = "Le matériel peut être tout aussi révélatrice que la programmation. Jetez un oeil à un processeur SI de l'Etat / ID MIPS car il peut prendre deux jeux d'instructions à la fois dans et enlever l'étape d'attente dans tous les appels de la branche et de saut. Augmentation des performances de 33% dans l'exécution des instructions sur l'architecture traditionnelle MIPS dans le meilleur des cas.";	
	// connect
	languageStrings['ConnectHeader'] = "Entrer En Contact";
	languageStrings['LetterGreeting'] = "Bonjour Garrett,";
	languageStrings['SlimShady'] = "Je m'appelle ";
	languageStrings['ToEmail'] = " et je tiens à envoyer des salutations à partir ";
	languageStrings['ToMessage'] = "Je me connecte avec vous ";
	languageStrings['Message'] = "pour vous dire comment votre site est génial!";
	languageStrings['Sincerely'] = "Cordialement,";
	languageStrings['NewFriend'] = "Votre Ami";
	languageStrings['ClickSend'] = "Envoyer";
	languageStrings['ResponseValid'] = "Je me réjouis de notre nouvelle boîte de dialogue!";
	languageStrings['ResponseInvalid'] = "S'il vous plaît vérifier votre information fournie.";
	updateStrings();
	}

}]);