require('dotenv').config()
require('dotenv').config({ path: __dirname + '/.env.local' });


const Discord = require('discord.js'); //{Client, RichEmbed}
const bot = new Discord.Client();


const token = process.env.DISCORD_TOKEN ;
const riotAPiToken = process.env.RIOTAPI_TOKEN;
const PREFIX = ">";
const ytdl = require("ytdl-core");


//const privateMessage = require('./private.message');

bot.on('ready', () => {
    console.log('Bot is now Online!');
    //console.log(client.users.get('ID_OF_USER').send("hello"));
    bot.user.setActivity('porofessor.gg | limited server bot', {type: 'WATCHING'}).catch(console.error);

})




bot.on('message', msg=>{
    let message = (msg.content).toLowerCase();
    
    console.log(message);
    


    //Ranks
    message.includes("iron") || message.includes("ricardo") || message.includes("unranked") ? msg.reply('Esse pessoal é tão mau , que não acertava na água se estivesse num barco.'): false;
    message.includes("bronze") ? msg.reply('Não tá mal já acertam no botão de mute!'): false;
    message.includes("silver") ? msg.reply('Como te sentes por seres uma tipical white bitch do League of Legends?'): false;
    message.includes("gold") ? msg.reply('Não fales do teu elo!'): false;
    message.includes("plat" ) || message.includes("platinum") ? msg.reply('Plat? Quem te dera teres esse rank!'): false;
    message.includes("diamond") ? msg.reply('Às moscas.'): false;

    //Pessoas
    message.includes("judeu") ? msg.reply('Reza a lenda que ficou na Jungle o resto da vida a farmar, pa não ir gankar bot.'): false;
    message.includes("joao") || message.includes('joão') ? msg.reply('Reza a lenda que esse homem nunca ganhou a botlane.'): false;
    message.includes("andre") ? msg.reply('Reza a lenda que este homem costumava partir colheres com o rabo, bastava fletir o rabo... No entanto parou quando deixou de ser rentável! *OTP Nasus pa vida!*'): false;              
    message.includes("ricardo") ? msg.reply('Reza a lenda que este homom é a única pessoa no mundo que consegue feedar com o champ que não morre...'): false;
    message.includes('inglez') ? msg.reply('Reza a lenda que até hoje ainda não acertou um skillshot!'): false;
    message.includes('henrique') ? msg.reply('Reza a lenda que este homem nunca chegou ao nível 30'): false;
    message.includes('laura') ? msg.reply('Tche puto , gandee kizomba memmooo furiroo!'): false;
    message.includes('isabel') ? msg.reply('Reza a lenda que esta mulher senta-se no chão e come das duas cadeiras...'): false;
    
    message.includes('xd') ? msg.reply('XD o caralho fds... Vai passear!'): false;
    
    message.includes('ola') ? message.author.send("adeus"): false; // user.send('adeus')

    //champs
    message.includes("aatrox") ? msg.reply('Não importa quanto tempo já jogas-te lol, que nunca te vais esqueçer da passiva dele'): false;
    message.includes("ahri") ? msg.reply(''): false;
    message.includes("akali") ? msg.reply(''): false;
    message.includes("alistar") ? msg.reply(''): false;
    message.includes("amumu") ? msg.reply('De longe o Champ mais forte e mais foda'): false;
    message.includes("anivia") ? msg.reply('Um pássaro que não voa mais que 20 centimetros'): false;
    message.includes("annie") ? msg.reply('2020 e continua a usar o urso para trabalho escravo'): false;
    message.includes("aphelius") ? msg.reply('Artilharia das forças armadas'): false;
    message.includes("ashe") ? msg.reply(''): false;
    message.includes("aurelion Sol") ? msg.reply(''): false;
    message.includes("azir") ? msg.reply(''): false;
    message.includes("bard") ? msg.reply('Tipico champ que abandona a lane a cada 2 minutos'): false;
    message.includes("blitzcrank") ? msg.reply('É o melhor suporte, pois é impossivel errar o Q!'): false;
    message.includes("braum") ? msg.reply('Pai do Flint, do chovem almondegas'): false;
    message.includes("caitlin") ? msg.reply(''): false;
    message.includes("camille") ? msg.reply('A única tesoura que não perde para pedra!'): false;
    message.includes("cassiopeia") ? msg.reply('Petrifica até quem é cego!'): false;
    message.includes("cho'gath") ? msg.reply('Champ comunista'): false;
    message.includes("corki") ? msg.reply('Único champ que voa e consegue comprar botas...'): false;
    message.includes("darius") ? msg.reply(''): false;
    message.includes("diana") ? msg.reply(''): false;
    message.includes("mundo") ? msg.reply('A única vantagem que tem de jogar com ele, é entrar no jogo a perder e ganhar, e no final dizer "O mundo afinal dá voltas"...'): false;
    message.includes("draven") ? msg.reply('0/100 é continua a dar 1shot'): false;
    message.includes("ekko") ? msg.reply(''): false;
    message.includes("elise") ? msg.reply(''): false;
    message.includes("evelynn") ? msg.reply(''): false;
    message.includes("ezreal") ? msg.reply(''): false;
    message.includes("fiddlesticks") ? msg.reply(''): false;
    message.includes("fiora") ? msg.reply('Ninguém fala francês, coitada'): false;
    message.includes("fizz") ? msg.reply('Peixe com skin da pesca...'): false;
    message.includes("galio") ? msg.reply('De longe, dos mais fortes do lol... se já é forte, imagina uma árvore inteira!'): false;
    message.includes("gangplank") ? msg.reply(''): false;
    message.includes("garen") ? msg.reply('Beyblade'): false;
    message.includes("gnar") ? msg.reply('10 centimetros quando mole, 40 duro!'): false;
    message.includes("gragas") ? msg.reply('Mais bêbado que a minha avó!'): false;
    message.includes("graves") ? msg.reply('O ministério da saúde adverte que fumar pode causar cancro!'): false;
    message.includes("hecarim") ? msg.reply(''): false;
    message.includes("heimerdinger") ? msg.reply('Imagina a pessoa que contratavas para arder a tua casa...'): false;
    message.includes("illaoi") ? msg.reply('Quase fez metade dum servidor parar de jogar lol...'): false;
    message.includes("irelia") ? msg.reply(''): false;
    message.includes("ivern") ? msg.reply('100% Jamaicano'): false;
    message.includes("janna") ? msg.reply(''): false;
    message.includes("jarvan") ? msg.reply(''): false;
    message.includes("jax") ? msg.reply(''): false;
    message.includes("jayce") ? msg.reply(''): false;
    message.includes("jhin") ? msg.reply('Tão bom que nunca falha um tiro da ulti...'): false;
    message.includes("jinx") ? msg.reply('"TRAFICANTE, TRAFICANTE, TRAFICANTE!" - TestCombo 2020'): false;
    message.includes("kai'sa") ? msg.reply('Kha zix ADC'): false;
    message.includes("kalista") ? msg.reply(''): false;
    message.includes("karma") ? msg.reply(''): false;
    message.includes("karthus") ? msg.reply('Único champ que consegue ultar morto...'): false;
    message.includes("kassadin") ? msg.reply(''): false;
    message.includes("katarina") ? msg.reply(''): false;
    message.includes("kayle") ? msg.reply('Early game sensacional'): false;
    message.includes("kayn") ? msg.reply(''): false;
    message.includes("kennen") ? msg.reply('Cópia barata do picaku'): false;
    message.includes("kha'zix") ? msg.reply('Mais rijo que barata...'): false;
    message.includes("kindred") ? msg.reply(''): false;
    message.includes("kled") ? msg.reply(''): false;
    message.includes("kog'maw") ? msg.reply('Até te cospe na boca!'): false;
    message.includes("leblanc") ? msg.reply(''): false;
    message.includes("lee sin") ? msg.reply('Mesmo sendo cego, o teemo deixa-o cego...'): false;
    message.includes("leona") ? msg.reply(''): false;
    message.includes("lillia") ? msg.reply('Darius num cavalo com burst do teemo, page passive e sleepy da zoe'): false;
    message.includes("lissandra") ? msg.reply('Congela até quem é de gelo'): false;
    message.includes("lucian") ? msg.reply(''): false;
    message.includes("lulu") ? msg.reply('O riso mais gostoso do jogo'): false;
    message.includes("lux") ? msg.reply(''): false;
    message.includes("malphite") ? msg.reply('Olhá a pedra!'): false;
    message.includes("malzahar") ? msg.reply('Cospe corona!'): false;
    message.includes("maokai") ? msg.reply('Quem é que acorda, come, lava os dentes, liga o pc, liga o lol, e VAI JOGAR DELE?!'): false;
    message.includes("master yi") ? msg.reply('Q-Q-W-Q-Q-Q = Penta'): false;
    message.includes("miss fortune") ? msg.reply(''): false;
    message.includes("mordekaiser") ? msg.reply('CameraPrivê'): false;
    message.includes("morgana") ? msg.reply('Vai mijar que o root demora tempo'): false;
    message.includes("nami") ? msg.reply('Nem apagar o brand consegue'): false;
    message.includes("nasus") ? msg.reply('Propaganda ao Farming Simulator 2012'): false;
    message.includes("nautilus") ? msg.reply('Uma das ultis mais insuportáveis do jogo!'): false;
    message.includes("neeko") ? msg.reply('UMA MERDA!!!!!'): false;
    message.includes("nidalee") ? msg.reply('Q = 1shot'): false;
    message.includes("nocturne") ? msg.reply('Fica sem visão com o própria ulti'): false;
    message.includes("nunu") ? msg.reply('Depois do rework manda bola de neve quando antes dava solo drake lv4'): false;
    message.includes("olaf") ? msg.reply(''): false;
    message.includes("orianna") ? msg.reply('De certeza que leva um pokemon dentro da bola...'): false;
    message.includes("ornn") ? msg.reply(''): false;
    message.includes("pantheon") ? msg.reply(''): false;
    message.includes("poppy") ? msg.reply(''): false;
    message.includes("pyke") ? msg.reply(''): false;
    message.includes("Qiyana") ? msg.reply(''): false;
    message.includes("quinn") ? msg.reply('Nem a voar consegue ver'): false;
    message.includes("rakan") ? msg.reply('Stalker'): false;
    message.includes("rammus") ? msg.reply('Hotwheels.com'): false;
    message.includes("rek'sai") ? msg.reply('A última vez que vi alguém jogar com ela, foi o Wilson no campeonato de 2015...'): false;
    message.includes("renekton") ? msg.reply('Mais conhecido por Lacoste'): false;
    message.includes("rengar") ? msg.reply(''): false;
    message.includes("riven") ? msg.reply('40% CR = OP'): false;
    message.includes("rumble") ? msg.reply(''): false;
    message.includes("ryze") ? msg.reply('Propaganda da TIM'): false;
    message.includes("sejuani") ? msg.reply('Pouca gente consegue montar um porco assim...'): false;
    message.includes("senna") ? msg.reply(''): false;
    message.includes("sett") ? msg.reply(''): false;
    message.includes("shaco") ? msg.reply(''): false;
    message.includes("shen") ? msg.reply(''): false;
    message.includes("shivana") ? msg.reply(''): false;
    message.includes("singed") ? msg.reply('Cheiro a merda por todo o lado!'): false;
    message.includes("sion") ? msg.reply('Comboio Thomas'): false;
    message.includes("sivir") ? msg.reply(''): false;
    message.includes("skarner") ? msg.reply('Esquecido na semana asseguir de ser lançado'): false;
    message.includes("sona") ? msg.reply('Grandes peitos!'): false;
    message.includes("soraka") ? msg.reply(''): false;
    message.includes("swain") ? msg.reply(''): false;
    message.includes("sylas") ? msg.reply('Trombudo de merda que rouba ulti'): false;
    message.includes("syndra") ? msg.reply('"Virou e apertou R, grandes mecânicas!"'): false;
    message.includes("tahm kench") ? msg.reply('Só engole!'): false;
    message.includes("taliyah") ? msg.reply('Trump do lol'): false;
    message.includes("talon") ? msg.reply('Veio do Assassins Creed pa jogar lol'): false;
    message.includes("taric") ? msg.reply('José Castelo Branco'): false;
    message.includes("teemo") ? msg.reply('Ainda na esperança de algum dia ser removido do jogo'): false;
    message.includes("thresh") ? msg.reply('Ninguêm sabe usar a lanterna'): false;
    message.includes("tristana") ? msg.reply(''): false;
    message.includes("trundle") ? msg.reply(''): false;
    message.includes("tryndamere") ? msg.reply(''): false;
    message.includes("twisted fate") ? msg.reply('Baralhos infinitos'): false;
    message.includes("twitch") ? msg.reply(''): false;
    message.includes("udyr") ? msg.reply(''): false;
    message.includes("urgot") ? msg.reply(''): false;
    message.includes("varus") ? msg.reply(''): false;
    message.includes("vayne") ? msg.reply('Óculos da RayBan'): false;
    message.includes("veigar") ? msg.reply(''): false;
    message.includes("vel'koz") ? msg.reply('Mike Wazowski'): false;
    message.includes("vi") ? msg.reply('Punheteira Genuína'): false;
    message.includes("victor") ? msg.reply(''): false;
    message.includes("vladimir") ? msg.reply(''): false;
    message.includes("volibear") ? msg.reply('Propaganda da Cocacola'): false;
    message.includes("warwick") ? msg.reply(''): false;
    message.includes("wukong") ? msg.reply(''): false;
    message.includes("xayah") ? msg.reply('Galinha Mutante'): false;
    message.includes("xerath") ? msg.reply('Frigorifico que dispara pudim'): false;
    message.includes("xin zhao") ? msg.reply(''): false;
    message.includes("yasuo") ? msg.reply('Simplesmente o melhor champ do jogo'): false;
    message.includes("yorick") ? msg.reply('Nunca irás ver uma pá a dar tanto dano...'): false;
    message.includes("yuumi") ? msg.reply(''): false;
    message.includes("zac") ? msg.reply('Pudim andante'): false;
    message.includes("zed") ? msg.reply(''): false;
    message.includes("ziggs") ? msg.reply(''): false;
    message.includes("zilean") ? msg.reply(''): false;
    message.includes("zoe") ? msg.reply('RULE 34?'): false;
    message.includes("zyra") ? msg.reply('Quando ela morria, dava um tiro de sniper que dava mais dano que um critico do jhin'): false;

})

/*
client.on("message", function(message) {
    if(message.content === "ping") {
        client.message.send(author, "pong");
    }
});*/



/*

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){
        case 'help':
            const Embed = new RichEmbed()
            .setTitle("Helper Embed")
            .setColor(0xFF0000)
            .setDescription("Usa o >help para ter acesso aos comandos de ajuda");

            message.author.send(Embed);

        break;
    }



})
*/




bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name ==="general");
    if(!channel) return;

    channel.send('Benvindo aos MONH3, ${member}!')
})



bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'play':

            function play(connection, message){
                var server = servers[message.guild.id];

                server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
            
                server.queue.shift();
                server.dispatcher.on("end", function(){
                    if(server.queue[0]){
                        play(connection, message);
                    }else{
                        connection.disconnect();
                    }
                });
            
            }


            if(!args[1]){
                message.channel.send("Necessitas de pôr um link!");
                return;
            }
            if(!message.member.voiceChannel){
                message.channel.send("Necessitas de estar num chat de voz para ligar o bot!");

            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if(!message.guild.voice.connection) message.member.voiceChannel.join().then(function(connection){
                play(connection, message);
            })




        break;

        case 'skip':
            var server = servers[message.guild.id];
            if(server.dispatcher) server.dispatcher.end();
            message.channel.send("A passar para a próxima música!")
        break;

        case 'stop':
            var server =server[message.guild.id];
            if(message.guild.voice.connection){
                for(var i = server.queue.length -1; i >= offscreenBuffering; i--){
                    server.queue.splice(i, 1);
                }

                server.dispatcher.end();
                message.channel.send("A parar a queue, a sair do chat de voz!")
                console.log("Queue parada!")
            }
            if(message.guild.connection) message.guild.voiceConnection.disconnect();

    }



})


//entrada bot https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/
/*
var Discordd = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discordd.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
*/






bot.login(token);
//bot.off