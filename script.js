let currentAudio = null;
let currentVolume = 0.05;
let isMuted = false;
let previousVolume = 0.05;

const imageData = [
    {
        id: 1,
        title: "一个盘过的葫芦",
        date: "2024-01-15",
        description: "深黄色的 自然生长的葫芦 手心大小\n 这是一个盘过的葫芦，我伯伯送给我的，他都盘了8年了，后面送给我了，我觉得象征着亲情",
        image: "images/1.png",
        audio: "audio/1.mp3"
    },
    {
        id: 2,
        title: "ipod",
        date: "2024-02-20",
        description: "是金色的金属材质 很小一个\n一起上学期间一直用它来听歌，承载我很多记忆\n还和小男生一起带一个耳机听一首纯音乐，他还听哭了\n想说的话:别坏",
        image: "images/2.png",
        audio: "audio/1.mp3"
    },
    {
        id: 3,
        title: "考试涂卡笔",
        date: "2024-03-10",
        description: "黑色 晨光牌子 铅芯是长方体，涂卡方便\n伴随我初中高中每一次考试，并且用了六年也没用完\n并且高中有周考月考期中期末考等大大小小的测试数不胜数竟然也没有用完真的很神奇、…\n想说的话:但是我的笔上大学之后不知道被我丢哪去了。",
        image: "images/3.png",
        audio: "audio/1.mp3"
    },
    {
        id: 4,
        title: "骷髅",
        date: "2024-04-15",
        description: "一只手的大小，很帅\n太帅了，而且拼得很辛苦，沉没成本太高了",
        image: "images/4.png",
        audio: "audio/1.mp3"
    },
    {
        id: 5,
        title: "校门口的麻辣烫",
        date: "2024-05-10",
        description: "颜色——绿色白色红色棕色材质——塑料+胶体分散体型\n这家店和很多朋友都去吃过，和同学，和老师，和校友甚至网友——美味之\n想说的话:什么时候再和朋友一起来吃呢?",
        image: "images/5.png",
        audio: "audio/1.mp3"
    },
    {
        id: 6,
        title: "放在婴儿车里的篮球",
        date: "2024-05-10",
        description: "深红色 皮质 球状\n从大一开始这颗球就一直陪着我 很有意义\n想说的话:谢谢你兄弟",
        image: "images/6.png",
        audio: "audio/1.mp3"
    },
    {
        id: 7,
        title: "笔记本",
        date: "2024-05-10",
        description: "红色，硬面抄\n记录生活",
        image: "images/7.png",
        audio: "audio/1.mp3"
    },
    {
        id: 8,
        title: "我妈妈在十八岁生日给我买的一套首饰",
        date: "2024-05-10",
        description: "粉色的钻石镶嵌的小熊，金色的链条\n因为这是我的十八岁礼物，非常珍贵，里面还有我妈妈给我的手写信，那个时候的我其实一直被升学压力裹挟\n突然能收到这样的礼物真的能感受到我母亲对我的支持和浓厚的爱意\n想说的话:我会珍惜你，我爱你",
        image: "images/8.png",
        audio: "audio/1.mp3"
    },
    {
        id: 9,
        title: "一个幸运符",
        date: "2024-05-10",
        description: "金色的小小的闪闪的\n和朋友去湄洲岛旅行，离开的时候，民宿的老板娘送了我和朋友一人一个。",
        image: "images/9.png",
        audio: "audio/1.mp3"
    },
    {
        id: 10,
        title: "一个挂件",
        date: "2024-05-10",
        description: "糖果球挂件，上面有凯蒂猫\n很好的朋友送的惊喜礼物，超级懂我，所以很开心\n想说的话:谢谢kitty！我爱熊！",
        image: "images/10.png",
        audio: "audio/1.mp3"
    },
    {
        id: 11,
        title: "一只小狗玩偶",
        date: "2024-05-10",
        description: "是我的阿贝贝，陪着我度过了很久很久的时光。\n在我三岁的时候，妈妈给我买了这只玩偶小狗，那时候还不懂，以为玩偶小狗也会和真的小狗一样长毛，所以还给它修剪毛发，导致它的脑袋变得秃秃的。\n它会陪着我一起去上课外兴趣班，我会拿黑色的墨汁涂在它黑色的鼻子上。\n我老是丢三落四，不止一次的忘记它，第一次是我很小的时候，在商场我很随意的把它放在了店里的柜台上，但在吃饭的时候突然想起来它不见了，饭都不吃了就去找，幸好最后找到了。\n另一次是在云南，我说我也得带它出去玩玩吧，在云南的一个小屋子里，我在包里其他东西的时候不小心把它掉出来了，最后离开之前，检查物品才发现它不见了，到处找它，最后在床底发现了黑漆漆的它。\n酒店里吹风机功率特别小，那天给它洗澡吹干，吹到了凌晨一点。自从这一次之后，我就很少带它出门了，因为我很害怕把它弄丢。\n它现在依然陪着我，我把它从家里带到了宿舍，每晚陪着我睡觉，成为我生命中不可或缺的一小部分\n想说的话:它会说它会永远陪着我",
        image: "images/11.png",
        audio: "audio/1.mp3"
    },
    {
        id: 12,
        title: "一根笔",
        date: "2024-05-10",
        description: "灰色，木质的\n小学老师送的，当时人在低谷期，对学习没兴趣，但是老师一直鼓励我\n送了我这支刻着她对我寄予的木质笔\n想说的话:谢谢你",
        image: "images/12.png",
        audio: "audio/1.mp3"
    },
    {
        id: 13,
        title: "锡马物资袋",
        date: "2024-05-10",
        description: "透明包装着各种物资\n每个物资包都亲手装过\n想说的话:别扔来扔去的",
        image: "images/13.png",
        audio: "audio/1.mp3"
    },
    {
        id: 14,
        title: "小黄鸭",
        date: "2024-05-10",
        description: "大概高20cm，黄色毛绒小鸭（毛打绺版\n二三年级在精品店（好古早的名字hh）买的小黄鸭，简直是一见钟情，这个小鸭子脑袋上有个疤，感觉很独特\n一直从几岁陪伴我到现在！完全是阿贝贝的存在\n想说的话:谢谢你哦！",
        image: "images/14.png",
        audio: "audio/1.mp3"
    },
    {
        id: 15,
        title: "小时候买的玩具狗",
        date: "2024-05-10",
        description: "冰蓝色的毛绒小狗，水杯大小，由荞麦填充。\n因为小时候妈妈买的，小时候都有它陪我睡觉\n想说的话:希望你活过来",
        image: "images/15.png",
        audio: "audio/1.mp3"
    },
    {
        id: 16,
        title: "小五娃娃",
        date: "2024-05-10",
        description: "棕色的毛毛熊娃娃，抱着睡刚好\n是我的阿贝贝呀！从小学到大学，一直都陪着我。我超级喜欢它呀\n想说的话:“我超级喜欢夏莎莎啊”",
        image: "images/16.png",
        audio: "audio/1.mp3"
    },
    {
        id: 17,
        title: "小时候记忆中的老家",
        date: "2024-05-10",
        description: "院子栽满了桂花树每到每年的9月院子里一股桂花香\n小时候的家，是我一直记忆中最美好的地方",
        image: "images/17.png",
        audio: "audio/1.mp3"
    },
    {
        id: 18,
        title: "毛毯",
        date: "2024-05-10",
        description: "棕色毛毯一米长左右\n阿贝贝 我妈说我出生时买的 从小盖到达 高中大学住宿也都带着",
        image: "images/18.png",
        audio: "audio/1.mp3"
    }
    
];

// 创建图片网格 - 遍历图片数据并生成DOM元素
function createImageGrid() {
    const grid = document.getElementById('imageGrid');
    
    imageData.forEach(item => {
        // 创建图片容器元素
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.dataset.id = item.id;
        
        // 创建图片元素
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.loading = 'lazy';
        
        // 创建遮罩层显示标题
        const overlay = document.createElement('div');
        overlay.className = 'image-overlay';
        overlay.innerHTML = `<h3>${item.title}</h3>`;
        
        imageItem.appendChild(img);
        imageItem.appendChild(overlay);
        grid.appendChild(imageItem);
    });
}

let autoCloseTimer = null;
let progressInterval = null;
let currentImageId = null;

// 打开模态框 - 显示图片详情并播放音频
function openModal(imageId) {
    const modal = document.getElementById('imageModal');
    const image = imageData.find(item => item.id === imageId);
    
    if (image) {
        currentImageId = imageId;
        // 设置模态框内容
        document.getElementById('modalImage').src = image.image;
        document.getElementById('modalImage').alt = image.title;
        document.getElementById('modalTitle').textContent = image.title;
        document.getElementById('modalDate').textContent = `拍摄日期：${image.date}`;
        document.getElementById('modalDescription').textContent = image.description;
        
        // 显示模态框并添加动画
        modal.style.display = 'flex';
        modal.style.opacity = '1';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // 禁止背景滚动
        document.body.style.overflow = 'hidden';
        
        // 播放音频并启动自动关闭计时器
        playAudio(image.audio);
        startAutoCloseTimer();
    }
}

// 关闭模态框 - 停止音频和计时器，并隐藏对应的图片
function closeModal() {
    const modal = document.getElementById('imageModal');
    const imageItem = document.querySelector(`.image-item[data-id="${currentImageId}"]`);
    
    modal.classList.remove('show');
    modal.style.opacity = '1';
    
    // 清除计时器和音频
    clearTimeout(autoCloseTimer);
    clearInterval(progressInterval);
    stopAudio();
    
    // 延迟隐藏模态框以完成动画
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out', 'show');
        document.body.style.overflow = 'auto';
        
        // 隐藏已查看的图片
        if (imageItem) {
            imageItem.classList.add('hidden');
        }
    }, 300);
}

// 启动自动关闭计时器 - 10秒后自动关闭并隐藏图片
function startAutoCloseTimer() {
    const modal = document.getElementById('imageModal');
    
    let progress = 0;
    const duration = 10000; // 10秒
    const updateInterval = 100;
    
    // 更新弹窗透明度
    progressInterval = setInterval(() => {
        progress += updateInterval;
        
        // 前5秒保持完全不透明，5秒后开始逐渐变透明
        let opacity;
        if (progress < 5000) {
            opacity = 1;
        } else {
            opacity = 1 - ((progress - 5000) / (duration - 5000));
        }
        
        modal.style.opacity = opacity;
        
        // 时间到后隐藏图片并关闭模态框
        if (progress >= duration) {
            clearInterval(progressInterval);
            hideImageAndCloseModal();
        }
    }, updateInterval);
}

// 隐藏图片并关闭模态框 - 用于自动关闭时
function hideImageAndCloseModal() {
    const modal = document.getElementById('imageModal');
    const imageItem = document.querySelector(`.image-item[data-id="${currentImageId}"]`);
    
    stopAudio();
    modal.classList.add('fade-out');
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.opacity = '1';
        modal.classList.remove('fade-out', 'show');
        document.body.style.overflow = 'auto';
        
        // 隐藏已查看的图片
        if (imageItem) {
            imageItem.classList.add('hidden');
        }
    }, 500);
}

// 播放音频 - 支持循环播放
function playAudio(audioPath) {
    // 停止当前播放的音频
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    if (audioPath) {
        currentAudio = new Audio(audioPath);
        currentAudio.loop = true;
        currentAudio.volume = isMuted ? 0 : currentVolume;
        currentAudio.play().catch(error => {
            console.log('音频播放失败:', error);
        });
    }
}

// 停止音频播放
function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

// 设置音量
function setVolume(value) {
    currentVolume = value;
    isMuted = false;
    
    if (currentAudio) {
        currentAudio.volume = currentVolume;
    }
    
    updateVolumeUI();
}

// 切换静音状态
function toggleMute() {
    if (isMuted) {
        isMuted = false;
        currentVolume = previousVolume;
    } else {
        previousVolume = currentVolume;
        isMuted = true;
        currentVolume = 0;
    }
    
    if (currentAudio) {
        currentAudio.volume = currentVolume;
    }
    
    updateVolumeUI();
}

// 更新音量UI显示
function updateVolumeUI() {
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeValue = document.getElementById('volumeValue');
    const volumeIcon = document.querySelector('.volume-icon');
    
    if (volumeSlider) {
        volumeSlider.value = currentVolume * 100;
    }
    
    if (volumeValue) {
        volumeValue.textContent = Math.round(currentVolume * 100) + '%';
    }
    
    if (volumeIcon) {
        // 根据音量显示不同图标
        if (isMuted || currentVolume === 0) {
            volumeIcon.textContent = '🔇';
        } else if (currentVolume < 0.5) {
            volumeIcon.textContent = '🔉';
        } else {
            volumeIcon.textContent = '🔊';
        }
    }
}

// 初始化事件监听器
function initEventListeners() {
    const grid = document.getElementById('imageGrid');
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close-btn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeIcon = document.querySelector('.volume-icon');
    
    // 点击图片打开模态框
    grid.addEventListener('click', (e) => {
        const imageItem = e.target.closest('.image-item');
        if (imageItem) {
            const imageId = parseInt(imageItem.dataset.id);
            openModal(imageId);
        }
    });
    
    // 关闭按钮
    closeBtn.addEventListener('click', closeModal);
    
    // 点击模态框背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // 音量滑块
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const value = e.target.value / 100;
            setVolume(value);
        });
    }
    
    // 静音按钮
    if (volumeIcon) {
        volumeIcon.addEventListener('click', toggleMute);
    }
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    createImageGrid();
    initEventListeners();
});