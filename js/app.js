// ============================================================
// SETTINGS SCHEMA (v0.7.1 対応)
// ============================================================
const SETTINGS_SCHEMA = {

  // ===================== パフォーマンス関連 =====================
  BaseCampMaxNumInGuild: {
    type: 'integer', default: 4, min: 1, max: 10,
    category: 'performance', label: 'ギルド当たりの最大拠点数',
    description: 'ギルドが持てる拠点の最大数（最大10）。大きくすると処理負荷増大'
  },
  BaseCampWorkerMaxNum: {
    type: 'integer', default: 15, min: 1, max: 50,
    category: 'performance', label: '拠点当たりの最大パル数',
    description: '拠点で働けるパルの最大数（最大50）。大きくすると処理負荷増大'
  },
  ItemContainerForceMarkDirtyInterval: {
    type: 'float', default: 10.0, min: 0, step: 1.0,
    category: 'performance', label: 'コンテナ強制同期間隔（秒）',
    description: 'コンテナを開いている際に強制的に同期しなおす頻度（秒）'
  },
  MaxBuildingLimitNum: {
    type: 'integer', default: 0, min: 0,
    category: 'performance', label: '建築物数制限（プレイヤーごと）',
    description: 'プレイヤーごとの建築物数制限。0で無制限'
  },
  ServerReplicatePawnCullDistance: {
    type: 'float', default: 15000.0, min: 5000, max: 15000, step: 500.0,
    category: 'performance', label: 'パル同期距離（cm）',
    description: 'プレイヤーからのパルの同期距離（cm）。最小5000〜最大15000'
  },

  // ===================== サーバー関連 =====================
  ServerName: {
    type: 'string', default: 'Default Palworld Server',
    category: 'server', label: 'サーバー名', description: 'サーバーの表示名'
  },
  ServerDescription: {
    type: 'string', default: '',
    category: 'server', label: 'サーバー説明', description: 'サーバーの説明文'
  },
  ServerPassword: {
    type: 'string', default: '',
    category: 'server', label: 'サーバーパスワード', description: 'サーバー参加用パスワード'
  },
  ServerPlayerMaxNum: {
    type: 'integer', default: 32, min: 1,
    category: 'server', label: 'サーバー最大人数', description: 'サーバーに参加できる最大プレイヤー数'
  },
  AdminPassword: {
    type: 'string', default: '',
    category: 'server', label: '管理者パスワード', description: 'サーバー管理者権限取得用パスワード'
  },
  PublicPort: {
    type: 'integer', default: 8211, min: 1,
    category: 'server', label: '公開ポート', description: 'コミュニティサーバーで外部公開するポート番号（待受ポートは変更されません）'
  },
  PublicIP: {
    type: 'string', default: '',
    category: 'server', label: '公開IPアドレス', description: 'コミュニティサーバーで外部公開IPを明示的に指定'
  },
  RCONEnabled: {
    type: 'boolean', default: false,
    category: 'server', label: 'RCON有効', description: 'リモートコンソール（RCON）を有効にします'
  },
  RCONPort: {
    type: 'integer', default: 25575, min: 1,
    category: 'server', label: 'RCONポート', description: 'RCONのポート番号'
  },
  RESTAPIEnabled: {
    type: 'boolean', default: false,
    category: 'server', label: 'REST API有効', description: 'REST APIを有効にします'
  },
  RESTAPIPort: {
    type: 'integer', default: 8212, min: 1,
    category: 'server', label: 'REST APIポート', description: 'REST APIの待受ポート'
  },
  bAllowClientMod: {
    type: 'boolean', default: false,
    category: 'server', label: 'クライアントMod許可', description: 'Modを有効化しているユーザーのサーバー参加を許可するか'
  },
  bIsShowJoinLeftMessage: {
    type: 'boolean', default: false,
    category: 'server', label: '参加・退出メッセージ表示', description: 'プレイヤーの参加・退出時にゲーム内メッセージを表示するか'
  },
  bIsUseBackupSaveData: {
    type: 'boolean', default: false,
    category: 'server', label: 'バックアップセーブ有効', description: 'ワールドバックアップを有効化。有効化するとディスク負荷が高まります'
  },
  ChatPostLimitPerMinute: {
    type: 'integer', default: 10, min: 0,
    category: 'server', label: '1分間チャット上限数', description: '1分間に投稿可能なチャット数'
  },
  CrossplayPlatforms: {
    type: 'platforms', default: ['Steam', 'Xbox', 'PS5', 'Mac'],
    platforms: ['Steam', 'Xbox', 'PS5', 'Mac'],
    category: 'server', label: 'クロスプレイ対応プラットフォーム',
    description: '接続を許可するプラットフォーム。デフォルト: Steam, Xbox, PS5, Mac'
  },
  LogFormatType: {
    type: 'enum', default: 'Text', options: ['Text', 'Json'],
    category: 'server', label: 'ログフォーマット', description: 'ログフォーマットの指定（Text または Json）'
  },

  // ===================== ゲーム機能関連 =====================
  bEnableInvaderEnemy: {
    type: 'boolean', default: true,
    category: 'gamefeat', label: '襲撃有効', description: '拠点への敵の襲撃を有効にするか'
  },
  bEnableFastTravel: {
    type: 'boolean', default: true,
    category: 'gamefeat', label: 'ファストトラベル有効', description: 'ファストトラベルを有効にするか'
  },
  bEnableFastTravelOnlyBaseCamp: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: 'ファストトラベルを拠点間のみに制限',
    description: 'ファストトラベルを拠点間のみに制限するか'
  },
  bIsStartLocationSelectByMap: {
    type: 'boolean', default: true,
    category: 'gamefeat', label: 'マップでスタート地点選択', description: 'ゲーム開始地点をマップから選べるようにするか'
  },
  bExistPlayerAfterLogout: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: 'ログアウト後プレイヤー残存',
    description: 'ログアウト時にプレイヤーキャラクターがその場で寝た状態で残るか'
  },
  bAutoResetGuildNoOnlinePlayers: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: 'オフラインギルド自動リセット',
    description: 'ギルド全員がオフラインの場合、建築物や拠点パルを自動削除するか'
  },
  AutoResetGuildTimeNoOnlinePlayers: {
    type: 'float', default: 72.0, min: 0, step: 1.0,
    category: 'gamefeat', label: 'ギルドリセットまでの時間（時間）',
    description: 'bAutoResetGuildNoOnlinePlayers が有効の場合、何時間後にリセットするか'
  },
  bHardcore: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: 'ハードコアモード',
    description: 'ハードコードを有効化。死亡時にリスポーンできなくなります'
  },
  bCharacterRecreateInHardcore: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: 'ハードコア死亡時キャラ再作成',
    description: 'ハードコア設定時の死亡時にキャラクターを再作成できるか'
  },
  bPalLost: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: 'パル永久ロスト', description: '死亡時にパルを永久的にロストするか'
  },
  bShowPlayerList: {
    type: 'boolean', default: true,
    category: 'gamefeat', label: '参加者一覧表示', description: 'ESCキーで表示される画面での参加者一覧を有効化'
  },
  bBuildAreaLimit: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: '建築制限エリア有効',
    description: 'ファストトラベルなどの構造物付近で建築を禁止するか'
  },
  bInvisibleOtherGuildBaseCampAreaFX: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: '他ギルド拠点範囲非表示',
    description: '他ギルドの拠点範囲表示を非表示にするか'
  },
  bAllowGlobalPalboxExport: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: 'グローバルパルボックス書き出し許可',
    description: 'グローバルパルボックスへの保存を可能にするか'
  },
  bAllowGlobalPalboxImport: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: 'グローバルパルボックス読み込み許可',
    description: 'グローバルパルボックスからの読み込みを可能にするか'
  },
  bAllowEnhanceStat_Health: {
    type: 'boolean', default: true,
    category: 'gamefeat', label: 'HP強化割り振り許可',
    description: '「HP」へのステータス割り振りを許可するか'
  },
  bAllowEnhanceStat_Stamina: {
    type: 'boolean', default: true,
    category: 'gamefeat', label: 'スタミナ強化割り振り許可',
    description: '「スタミナ」へのステータス割り当てを許可するか'
  },
  bAllowEnhanceStat_Attack: {
    type: 'boolean', default: true,
    category: 'gamefeat', label: '攻撃強化割り振り許可',
    description: '「攻撃」へのステータス割り当てを許可するか'
  },
  bAllowEnhanceStat_Weight: {
    type: 'boolean', default: true,
    category: 'gamefeat', label: '所持重量強化割り振り許可',
    description: '「所持重量」へのステータス割り当てを許可するか'
  },
  bAllowEnhanceStat_WorkSpeed: {
    type: 'boolean', default: true,
    category: 'gamefeat', label: '作業速度強化割り振り許可',
    description: '「作業速度」へのステータス割り当てを許可するか'
  },
  bDisplayPvPItemNumOnWorldMap_BaseCamp: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: '拠点PvPアイテム数マップ表示',
    description: '各拠点内にあるPvP専用アイテムの個数をマップ上に表示するか'
  },
  bDisplayPvPItemNumOnWorldMap_Player: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: 'プレイヤーPvPアイテム数マップ表示',
    description: 'プレイヤーの位置とPvP専用アイテム数をマップに表示するか'
  },
  RandomizerType: {
    type: 'enum', default: 'None', options: ['None', 'Region', 'All'],
    category: 'gamefeat', label: 'パル出現ランダムモード',
    description: 'None: ランダム化しない, Region: 地域ごとにランダム化, All: 完全にランダム化'
  },
  bIsRandomizerPalLevelRandom: {
    type: 'boolean', default: false,
    category: 'gamefeat', label: 'パルレベル完全ランダム化',
    description: 'trueにすると野生パルのレベルを完全ランダムに。falseにするとエリア相応のレベルでランダム化'
  },
  RandomizerSeed: {
    type: 'integer', default: 0, min: 0,
    category: 'gamefeat', label: 'ランダマイザーシード値',
    description: '出現パルのランダムモード設定時のシード値'
  },

  // ===================== ゲームバランス関連 =====================
  DayTimeSpeedRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: '昼の経過速度', description: '昼の経過速度倍率'
  },
  NightTimeSpeedRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: '夜の経過速度', description: '夜の経過速度倍率'
  },
  ExpRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: '経験値倍率', description: '獲得経験値の倍率'
  },
  PalCaptureRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'パル捕獲確率倍率', description: 'パルの捕獲確率の倍率'
  },
  PalSpawnNumRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'パル出現倍率', description: 'パルの出現数倍率。パフォーマンスに影響します'
  },
  PalDamageRateAttack: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'パル攻撃ダメージ倍率', description: 'パルが与えるダメージの倍率'
  },
  PalDamageRateDefense: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'パル防御ダメージ倍率', description: 'パルが受けるダメージの倍率'
  },
  PlayerDamageRateAttack: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'プレイヤー攻撃ダメージ倍率', description: 'プレイヤーが与えるダメージの倍率'
  },
  PlayerDamageRateDefense: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'プレイヤー防御ダメージ倍率', description: 'プレイヤーが受けるダメージの倍率'
  },
  PlayerStomachDecreaceRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'プレイヤー満腹度減少倍率', description: 'プレイヤーの満腹度減少速度の倍率'
  },
  PlayerStaminaDecreaceRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'プレイヤースタミナ減少倍率', description: 'プレイヤーのスタミナ減少速度の倍率'
  },
  PlayerAutoHPRegeneRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'プレイヤーHP自然回復倍率', description: 'プレイヤーのHP自動回復倍率'
  },
  PlayerAutoHpRegeneRateInSleep: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'プレイヤー睡眠時HP回復倍率', description: 'プレイヤーの睡眠時HP回復倍率'
  },
  PalStomachDecreaceRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'パル満腹度減少倍率', description: 'パルの満腹度減少速度の倍率'
  },
  PalStaminaDecreaceRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'パルスタミナ減少倍率', description: 'パルのスタミナ減少速度の倍率'
  },
  PalAutoHPRegeneRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'パルHP自然回復倍率', description: 'パルのHP自動回復倍率'
  },
  PalAutoHpRegeneRateInSleep: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'パル睡眠時HP回復倍率', description: 'パルの睡眠時HP回復倍率（パルボックス内）'
  },
  BuildObjectDamageRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: '建築物被ダメージ倍率', description: '建築物に対するダメージ倍率'
  },
  BuildObjectDeteriorationDamageRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: '建築物劣化速度倍率', description: '建築物の劣化速度倍率'
  },
  CollectionDropRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: '採集アイテム入手量倍率', description: '採集アイテムの入手量倍率'
  },
  CollectionObjectHpRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: '採集オブジェクトHP倍率', description: '採集オブジェクトのHP倍率'
  },
  CollectionObjectRespawnSpeedRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: '採集オブジェクトリスポーン間隔', description: '採集オブジェクトのリスポーン間隔倍率'
  },
  EnemyDropItemRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'ドロップアイテム量倍率', description: '敵のドロップアイテム量の倍率'
  },
  EquipmentDurabilityDamageRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: '装備品耐久度減少倍率', description: '装備品の耐久度減少倍率'
  },
  ItemWeightRate: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'アイテム重量倍率', description: 'アイテム重量倍率'
  },
  ItemCorruptionMultiplier: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'アイテム腐敗速度倍率', description: 'アイテムの腐敗速度倍率'
  },
  DeathPenalty: {
    type: 'enum', default: 'All', options: ['None', 'Item', 'ItemAndEquipment', 'All'],
    category: 'balance', label: 'デスペナルティ',
    description: 'None: ロスト無し, Item: 装備品以外, ItemAndEquipment: 全装備とアイテム, All: 全装備と手持ちパル'
  },
  PalEggDefaultHatchingTime: {
    type: 'float', default: 72.0, min: 0, step: 1.0,
    category: 'balance', label: 'キョダイタマゴ孵化時間（時間）', description: 'キョダイタマゴが孵化するまでの時間（時間）'
  },
  GuildPlayerMaxNum: {
    type: 'integer', default: 20, min: 1,
    category: 'balance', label: 'ギルド最大人数', description: 'ギルドの最大人数'
  },
  GuildRejoinCooldownMinutes: {
    type: 'integer', default: 0, min: 0,
    category: 'balance', label: 'ギルド再加入クールタイム（分）', description: 'ギルド再加入までのクールタイム（分）'
  },
  SupplyDropSpan: {
    type: 'integer', default: 60, min: 0,
    category: 'balance', label: '補給物資投下間隔（分）', description: '隕石・補給物資の投下間隔（分）'
  },
  BlockRespawnTime: {
    type: 'float', default: 1.0, min: 0, step: 0.5,
    category: 'balance', label: '死亡後リスポーンクールタイム（秒）', description: '死亡後リスポーンするまでのクールタイム（秒）'
  },
  RespawnPenaltyDurationThreshold: {
    type: 'float', default: 30.0, min: 0, step: 1.0,
    category: 'balance', label: 'リスポーンペナルティ適用の生存時間閾値（秒）',
    description: '再死亡時にRespawnPenaltyTimeScaleを適用する生存時間の閾値（秒）'
  },
  RespawnPenaltyTimeScale: {
    type: 'float', default: 1.0, min: 0, step: 0.1,
    category: 'balance', label: 'リスポーンクールタイム倍率', description: 'リスポーンクールタイムに適用する倍率'
  },
  bAdditionalDropItemWhenPlayerKillingInPvPMode: {
    type: 'boolean', default: false,
    category: 'balance', label: 'PvPキル時追加ドロップ有効',
    description: 'PvP有効状態でプレイヤーをキルしたとき、専用アイテムをドロップするか'
  },
  AdditionalDropItemWhenPlayerKillingInPvPMode: {
    type: 'string', default: '',
    category: 'balance', label: 'PvPキル時追加ドロップアイテムID',
    description: 'bAdditionalDropItemWhenPlayerKillingInPvPMode が有効の時にドロップするアイテムのID'
  },
  AdditionalDropItemNumWhenPlayerKillingInPvPMode: {
    type: 'integer', default: 1, min: 0,
    category: 'balance', label: 'PvPキル時追加ドロップ数',
    description: 'bAdditionalDropItemWhenPlayerKillingInPvPMode が有効の時にドロップするアイテムの量'
  },
  DenyTechnologyList: {
    type: 'techlist', default: '',
    category: 'balance', label: '無効化するテクノロジー',
    description: '無効化するテクノロジーIDをカンマ区切りで入力。例: PALBOX,RepairBench'
  }
};

// ============================================================
// CATEGORIES（公式ドキュメントの4カテゴリ構成 + サブグループ）
// ============================================================
const CATEGORIES = [
  {
    id: 'performance', label: 'パフォーマンス関連', icon: '\u26A1',
    subgroups: [
      {
        id: 'perf-base', label: '\u{1F3E0} 拠点・建築',
        settings: ['BaseCampMaxNumInGuild', 'BaseCampWorkerMaxNum', 'MaxBuildingLimitNum']
      },
      {
        id: 'perf-sync', label: '\u2699\uFE0F 処理・同期',
        settings: ['ItemContainerForceMarkDirtyInterval', 'ServerReplicatePawnCullDistance']
      }
    ]
  },
  {
    id: 'server', label: 'サーバー関連', icon: '\u{1F5A5}',
    subgroups: [
      {
        id: 'srv-basic', label: '\u{1F4DB} 基本情報',
        settings: ['ServerName', 'ServerDescription', 'ServerPassword', 'ServerPlayerMaxNum', 'AdminPassword']
      },
      {
        id: 'srv-network', label: '\u{1F310} ネットワーク',
        settings: ['PublicPort', 'PublicIP', 'CrossplayPlatforms']
      },
      {
        id: 'srv-external', label: '\u{1F50C} 外部連携',
        settings: ['RCONEnabled', 'RCONPort', 'RESTAPIEnabled', 'RESTAPIPort']
      },
      {
        id: 'srv-misc', label: '\u{1F6E0} その他',
        settings: ['bAllowClientMod', 'bIsShowJoinLeftMessage', 'bIsUseBackupSaveData', 'ChatPostLimitPerMinute', 'LogFormatType']
      }
    ]
  },
  {
    id: 'gamefeat', label: 'ゲーム機能関連', icon: '\u{1F3AE}',
    subgroups: [
      {
        id: 'gf-travel', label: '\u{1F680} 移動・探索',
        settings: ['bEnableFastTravel', 'bEnableFastTravelOnlyBaseCamp', 'bIsStartLocationSelectByMap']
      },
      {
        id: 'gf-guild', label: '\u{1F3F0} 拠点・ギルド',
        settings: [
          'bEnableInvaderEnemy', 'bAutoResetGuildNoOnlinePlayers', 'AutoResetGuildTimeNoOnlinePlayers',
          'bBuildAreaLimit', 'bInvisibleOtherGuildBaseCampAreaFX'
        ]
      },
      {
        id: 'gf-death', label: '\u{1F480} 死亡・ハードコア',
        settings: ['bExistPlayerAfterLogout', 'bHardcore', 'bCharacterRecreateInHardcore', 'bPalLost']
      },
      {
        id: 'gf-stats', label: '\u{1F4CA} ステータス割り振り',
        settings: [
          'bAllowEnhanceStat_Health', 'bAllowEnhanceStat_Stamina',
          'bAllowEnhanceStat_Attack', 'bAllowEnhanceStat_Weight', 'bAllowEnhanceStat_WorkSpeed'
        ]
      },
      {
        id: 'gf-palbox', label: '\u{1F4E6} パルボックス',
        settings: ['bAllowGlobalPalboxExport', 'bAllowGlobalPalboxImport']
      },
      {
        id: 'gf-pvp', label: '\u{1F3B2} PvP・ランダマイザー',
        settings: [
          'bShowPlayerList',
          'bDisplayPvPItemNumOnWorldMap_BaseCamp', 'bDisplayPvPItemNumOnWorldMap_Player',
          'RandomizerType', 'bIsRandomizerPalLevelRandom', 'RandomizerSeed'
        ]
      }
    ]
  },
  {
    id: 'balance', label: 'ゲームバランス関連', icon: '\u2696',
    subgroups: [
      {
        id: 'bal-time', label: '\u{1F550} 時間・経験値',
        settings: ['DayTimeSpeedRate', 'NightTimeSpeedRate', 'ExpRate']
      },
      {
        id: 'bal-pal', label: '\u{1F43E} パル関連',
        settings: [
          'PalCaptureRate', 'PalSpawnNumRate',
          'PalDamageRateAttack', 'PalDamageRateDefense',
          'PalStomachDecreaceRate', 'PalStaminaDecreaceRate',
          'PalAutoHPRegeneRate', 'PalAutoHpRegeneRateInSleep',
          'PalEggDefaultHatchingTime'
        ]
      },
      {
        id: 'bal-player', label: '\u{1F9D1} プレイヤー関連',
        settings: [
          'PlayerDamageRateAttack', 'PlayerDamageRateDefense',
          'PlayerStomachDecreaceRate', 'PlayerStaminaDecreaceRate',
          'PlayerAutoHPRegeneRate', 'PlayerAutoHpRegeneRateInSleep'
        ]
      },
      {
        id: 'bal-build', label: '\u{1F3D7} 建築・採集',
        settings: [
          'BuildObjectDamageRate', 'BuildObjectDeteriorationDamageRate',
          'CollectionDropRate', 'CollectionObjectHpRate', 'CollectionObjectRespawnSpeedRate',
          'EnemyDropItemRate'
        ]
      },
      {
        id: 'bal-item', label: '\u{1F392} 装備・アイテム',
        settings: ['EquipmentDurabilityDamageRate', 'ItemWeightRate', 'ItemCorruptionMultiplier']
      },
      {
        id: 'bal-respawn', label: '\u{1F465} ギルド・リスポーン',
        settings: [
          'GuildPlayerMaxNum', 'GuildRejoinCooldownMinutes',
          'SupplyDropSpan', 'BlockRespawnTime',
          'RespawnPenaltyDurationThreshold', 'RespawnPenaltyTimeScale',
          'DeathPenalty'
        ]
      },
      {
        id: 'bal-pvp', label: '\u2694\uFE0F PvP・テクノロジー',
        settings: [
          'bAdditionalDropItemWhenPlayerKillingInPvPMode',
          'AdditionalDropItemWhenPlayerKillingInPvPMode',
          'AdditionalDropItemNumWhenPlayerKillingInPvPMode',
          'DenyTechnologyList'
        ]
      }
    ]
  }
];

// カテゴリの総設定項目数を取得するヘルパー
function getCategorySettingsCount(category) {
  return category.subgroups.reduce((sum, sub) => sum + sub.settings.length, 0);
}

// ============================================================
// PARAMETER ORDER（公式ドキュメントの記載順に準拠）
// ============================================================
const PARAM_ORDER = [
  // パフォーマンス関連
  'BaseCampMaxNumInGuild', 'BaseCampWorkerMaxNum',
  'ItemContainerForceMarkDirtyInterval', 'MaxBuildingLimitNum',
  'ServerReplicatePawnCullDistance',
  // サーバー関連
  'ServerName', 'ServerDescription', 'ServerPassword', 'ServerPlayerMaxNum',
  'AdminPassword', 'PublicPort', 'PublicIP',
  'RCONEnabled', 'RCONPort',
  'RESTAPIEnabled', 'RESTAPIPort',
  'bAllowClientMod', 'bIsShowJoinLeftMessage', 'bIsUseBackupSaveData',
  'ChatPostLimitPerMinute', 'CrossplayPlatforms', 'LogFormatType',
  // ゲーム機能関連
  'bEnableInvaderEnemy', 'bEnableFastTravel', 'bEnableFastTravelOnlyBaseCamp',
  'bIsStartLocationSelectByMap', 'bExistPlayerAfterLogout',
  'bAutoResetGuildNoOnlinePlayers', 'AutoResetGuildTimeNoOnlinePlayers',
  'bHardcore', 'bCharacterRecreateInHardcore', 'bPalLost',
  'bShowPlayerList', 'bBuildAreaLimit', 'bInvisibleOtherGuildBaseCampAreaFX',
  'bAllowGlobalPalboxExport', 'bAllowGlobalPalboxImport',
  'bAllowEnhanceStat_Health', 'bAllowEnhanceStat_Stamina',
  'bAllowEnhanceStat_Attack', 'bAllowEnhanceStat_Weight', 'bAllowEnhanceStat_WorkSpeed',
  'bDisplayPvPItemNumOnWorldMap_BaseCamp', 'bDisplayPvPItemNumOnWorldMap_Player',
  'RandomizerType', 'bIsRandomizerPalLevelRandom', 'RandomizerSeed',
  // ゲームバランス関連
  'DayTimeSpeedRate', 'NightTimeSpeedRate',
  'ExpRate', 'PalCaptureRate', 'PalSpawnNumRate',
  'PalDamageRateAttack', 'PalDamageRateDefense',
  'PlayerDamageRateAttack', 'PlayerDamageRateDefense',
  'PlayerStomachDecreaceRate', 'PlayerStaminaDecreaceRate',
  'PlayerAutoHPRegeneRate', 'PlayerAutoHpRegeneRateInSleep',
  'PalStomachDecreaceRate', 'PalStaminaDecreaceRate',
  'PalAutoHPRegeneRate', 'PalAutoHpRegeneRateInSleep',
  'BuildObjectDamageRate', 'BuildObjectDeteriorationDamageRate',
  'CollectionDropRate', 'CollectionObjectHpRate', 'CollectionObjectRespawnSpeedRate',
  'EnemyDropItemRate', 'EquipmentDurabilityDamageRate',
  'ItemWeightRate', 'ItemCorruptionMultiplier',
  'DeathPenalty', 'PalEggDefaultHatchingTime',
  'GuildPlayerMaxNum', 'GuildRejoinCooldownMinutes',
  'SupplyDropSpan', 'BlockRespawnTime',
  'RespawnPenaltyDurationThreshold', 'RespawnPenaltyTimeScale',
  'bAdditionalDropItemWhenPlayerKillingInPvPMode',
  'AdditionalDropItemWhenPlayerKillingInPvPMode',
  'AdditionalDropItemNumWhenPlayerKillingInPvPMode',
  'DenyTechnologyList'
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================
const STORAGE_KEY = 'palworld-server-settings-v2';
const CUSTOM_SETTINGS_KEY = 'palworld-custom-settings-v1';

function getDefaultSettings() {
  const defaults = {};
  Object.keys(SETTINGS_SCHEMA).forEach(key => {
    const s = SETTINGS_SCHEMA[key];
    defaults[key] = s.type === 'platforms' ? [...s.default] : s.default;
  });
  return defaults;
}

function formatValue(value, schema) {
  const type = schema.type;
  switch (type) {
    case 'float':
      return Number(value).toFixed(6);
    case 'integer':
      return Math.floor(Number(value)).toString();
    case 'boolean':
      return value ? '"True"' : '"False"';
    case 'string':
      return '"' + String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
    case 'enum':
      return String(value);
    case 'platforms': {
      // CrossplayPlatforms=(Steam,Xbox,PS5,Mac)
      const selected = Array.isArray(value) ? value : [];
      return '(' + selected.join(',') + ')';
    }
    case 'techlist': {
      // DenyTechnologyList=() or ("PALBOX","RepairBench")
      const raw = String(value).trim();
      if (!raw) return '()';
      const ids = raw.split(',').map(s => s.trim()).filter(s => s.length > 0);
      if (ids.length === 0) return '()';
      return '(' + ids.map(id => '"' + id + '"').join(',') + ')';
    }
    default:
      return String(value);
  }
}

function parseOptionSettings(content) {
  // OptionSettings=( の位置を探す
  const optIdx = content.indexOf('OptionSettings=');
  if (optIdx === -1) return null;

  let startParen = optIdx + 'OptionSettings='.length;
  while (startParen < content.length && content[startParen] !== '(') startParen++;
  if (startParen >= content.length) return null;

  // 括弧の深さを追跡して内側の文字列を取り出す
  let depth = 0;
  let inQuotes = false;
  let innerEnd = -1;
  for (let i = startParen; i < content.length; i++) {
    const ch = content[i];
    const prev = i > 0 ? content[i - 1] : '';
    if (ch === '"' && prev !== '\\') inQuotes = !inQuotes;
    if (!inQuotes && ch === '(') depth++;
    else if (!inQuotes && ch === ')') {
      depth--;
      if (depth === 0) { innerEnd = i; break; }
    }
  }
  if (innerEnd === -1) return null;

  const inner = content.slice(startParen + 1, innerEnd);

  // 文字単位のステートマシンでkey=valueペアを分解
  const result = {};
  let key = '', value = '';
  let inKey = true, inQuote = false, parenDepth = 0;

  for (let i = 0; i < inner.length; i++) {
    const c = inner[i];
    const prev = i > 0 ? inner[i - 1] : '';
    if (inKey) {
      if (c === '=') { inKey = false; value = ''; }
      else { key += c; }
    } else {
      if (inQuote) {
        value += c;
        if (c === '"' && prev !== '\\') inQuote = false;
      } else if (c === '"' && prev !== '\\') {
        inQuote = true;
        value += c;
      } else if (c === '(') {
        parenDepth++;
        value += c;
      } else if (c === ')') {
        if (parenDepth > 0) { parenDepth--; value += c; }
      } else if (c === ',' && parenDepth === 0) {
        const k = key.trim();
        if (k) result[k] = value.trim();
        key = ''; value = ''; inKey = true;
      } else {
        value += c;
      }
    }
  }
  const k = key.trim();
  if (k) result[k] = value.trim();
  return result;
}

function coerceValue(key, rawValue) {
  const schema = SETTINGS_SCHEMA[key];
  if (!schema) return null;
  switch (schema.type) {
    case 'float': {
      const s = String(rawValue).trim();
      if (!/^-?\d+(\.\d+)?$/.test(s)) return null;
      const v = Number(s);
      return Number.isFinite(v) ? v : null;
    }
    case 'integer': {
      const s = String(rawValue).trim();
      if (!/^-?\d+$/.test(s)) return null;
      const v = Number(s);
      return Number.isInteger(v) ? v : null;
    }
    case 'boolean': {
      const b = String(rawValue).replace(/^"|"$/g, '').toLowerCase();
      if (b === 'true') return true;
      if (b === 'false') return false;
      return null;
    }
    case 'string': {
      let s = rawValue;
      if (s.startsWith('"') && s.endsWith('"')) s = s.slice(1, -1);
      return s;
    }
    case 'enum': {
      let s = rawValue;
      if (s.startsWith('"') && s.endsWith('"')) s = s.slice(1, -1);
      return schema.options.includes(s) ? s : null;
    }
    case 'platforms': {
      let s = rawValue.trim();
      if (s.startsWith('(')) s = s.slice(1);
      if (s.endsWith(')')) s = s.slice(0, -1);
      if (!s.trim()) return [];
      return s
        .split(',')
        .map(p => p.trim().replace(/^"|"$/g, ''))
        .filter(p => p.length > 0 && schema.platforms.includes(p));
    }
    case 'techlist': {
      let s = rawValue.trim();
      if (s.startsWith('(')) s = s.slice(1);
      if (s.endsWith(')')) s = s.slice(0, -1);
      if (!s.trim()) return '';
      return s.split(',').map(p => p.trim().replace(/^"|"$/g, '')).filter(p => p.length > 0).join(',');
    }
    default:
      return rawValue;
  }
}

function generateIniOutput(settings, customSettings) {
  const header = '[/Script/Pal.PalGameWorldSettings]';
  const pairs = PARAM_ORDER.map(key => {
    const schema = SETTINGS_SCHEMA[key];
    const value = settings[key];
    return key + '=' + formatValue(value, schema);
  });

  // Parse and add custom settings
  const customPairs = [];
  if (customSettings && customSettings.trim()) {
    const lines = customSettings.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && trimmed.includes('=')) {
        const [key, ...valueParts] = trimmed.split('=');
        const k = key.trim();
        const v = valueParts.join('=').trim();
        if (k && v) {
          customPairs.push(k + '=' + v);
        }
      }
    }
  }

  // Deduplicate keys: custom settings override standard settings
  const keyValueMap = {};

  // First, add all standard pairs
  pairs.forEach(pair => {
    const eqIndex = pair.indexOf('=');
    if (eqIndex !== -1) {
      const key = pair.substring(0, eqIndex);
      keyValueMap[key] = pair;
    }
  });

  // Then, add custom pairs (overriding any duplicates)
  customPairs.forEach(pair => {
    const eqIndex = pair.indexOf('=');
    if (eqIndex !== -1) {
      const key = pair.substring(0, eqIndex);
      keyValueMap[key] = pair;
    }
  });

  // Build final array from map entries
  const allPairs = Object.values(keyValueMap);
  return header + '\nOptionSettings=(' + allPairs.join(',') + ')';
}

function saveToLocalStorage(settings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

function loadFromLocalStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Failed to load from localStorage:', e);
    return null;
  }
}

function saveCustomSettings(customSettings) {
  try {
    localStorage.setItem(CUSTOM_SETTINGS_KEY, customSettings);
  } catch (e) {
    console.error('Failed to save custom settings:', e);
  }
}

function loadCustomSettings() {
  try {
    return localStorage.getItem(CUSTOM_SETTINGS_KEY) || '';
  } catch (e) {
    console.error('Failed to load custom settings:', e);
    return '';
  }
}

// ============================================================
// VUE APPLICATION
// ============================================================
const { createApp, ref, computed, watch, onMounted } = Vue;

const app = createApp({
  setup() {
    const activeTab = ref('settings');
    const settings = ref(getDefaultSettings());
    const openCategories = ref({});
    const exportData = ref('');
    const importData = ref('');
    const importError = ref('');
    const importSuccess = ref(false);
    const copySuccess = ref(false);
    const iniImportData = ref('');
    const iniImportError = ref('');
    const iniImportSuccess = ref(false);
    const iniImportSuccessMsg = ref('');
    const customSettings = ref('');
    const droppedItems = ref([]);

    CATEGORIES.forEach(cat => { openCategories.value[cat.id] = true; });
    openCategories.value['custom'] = true;

    const iniOutput = computed(() => generateIniOutput(settings.value, customSettings.value));

    watch(settings, (newVal) => { saveToLocalStorage(newVal); }, { deep: true });
    watch(customSettings, (newVal) => { saveCustomSettings(newVal); });

    onMounted(() => {
      const saved = loadFromLocalStorage();
      if (saved) {
        Object.keys(saved).forEach(key => {
          if (key in settings.value) {
            settings.value[key] = saved[key];
          }
        });
      }
      customSettings.value = loadCustomSettings();
    });

    function toggleCategory(id) {
      openCategories.value[id] = !openCategories.value[id];
    }

    function togglePlatform(key, platform) {
      const arr = settings.value[key];
      const idx = arr.indexOf(platform);
      if (idx === -1) {
        arr.push(platform);
      } else {
        arr.splice(idx, 1);
      }
    }

    function resetToDefaults() {
      if (confirm('すべての設定をデフォルトに戻しますか？')) {
        const defaults = getDefaultSettings();
        Object.keys(defaults).forEach(key => {
          settings.value[key] = defaults[key];
        });
      }
    }

    async function copyToClipboard() {
      try {
        await navigator.clipboard.writeText(iniOutput.value);
        copySuccess.value = true;
        setTimeout(() => { copySuccess.value = false; }, 2000);
      } catch (e) {
        const textarea = document.createElement('textarea');
        textarea.value = iniOutput.value;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copySuccess.value = true;
        setTimeout(() => { copySuccess.value = false; }, 2000);
      }
    }

    function doExport() {
      try {
        const json = JSON.stringify(settings.value);
        exportData.value = LZString.compressToBase64(json);
      } catch (e) {
        exportData.value = '';
        console.error('Export failed:', e);
      }
    }

    function doImport() {
      importError.value = '';
      importSuccess.value = false;
      try {
        const trimmed = importData.value.trim();
        if (!trimmed) {
          importError.value = 'データが入力されていません';
          return;
        }
        const json = LZString.decompressFromBase64(trimmed);
        if (!json) {
          importError.value = '無効なデータです。正しいエクスポートデータを貼り付けてください。';
          return;
        }
        const parsed = JSON.parse(json);
        const defaults = getDefaultSettings();
        Object.keys(parsed).forEach(key => {
          if (key in defaults) {
            settings.value[key] = parsed[key];
          }
        });
        importSuccess.value = true;
        setTimeout(() => { importSuccess.value = false; }, 3000);
      } catch (e) {
        importError.value = 'データの読み込みに失敗しました: ' + e.message;
      }
    }

    function selectAllText(event) {
      event.target.select();
    }

    function doImportIni() {
      iniImportError.value = '';
      iniImportSuccess.value = false;
      iniImportSuccessMsg.value = '';
      droppedItems.value = [];

      const trimmed = iniImportData.value.trim();
      if (!trimmed) {
        iniImportError.value = 'INIファイルの内容が入力されていません';
        return;
      }

      const parsed = parseOptionSettings(trimmed);
      if (!parsed) {
        iniImportError.value = 'OptionSettings が見つかりません。正しい PalWorldSettings.ini の内容を貼り付けてください。';
        return;
      }

      let applied = 0;
      let skipped = 0;
      const dropped = [];

      Object.entries(parsed).forEach(([key, rawValue]) => {
        if (key in SETTINGS_SCHEMA) {
          const coerced = coerceValue(key, rawValue);
          if (coerced !== null) {
            settings.value[key] = coerced;
            applied++;
          } else {
            skipped++;
          }
        } else {
          // Track dropped items
          dropped.push({ key, value: rawValue });
          skipped++;
        }
      });

      if (applied === 0) {
        iniImportError.value = '適用できる設定が見つかりませんでした。';
        return;
      }

      // Store dropped items and add to custom settings
      if (dropped.length > 0) {
        droppedItems.value = dropped;
        const customLines = dropped.map(item => `${item.key}=${item.value}`).join('\n');

        // Append to existing custom settings if any
        if (customSettings.value.trim()) {
          customSettings.value = customSettings.value.trim() + '\n' + customLines;
        } else {
          customSettings.value = customLines;
        }

        iniImportSuccessMsg.value = `${applied}件の設定を適用しました（${skipped}件をスキップ、うち${dropped.length}件をカスタム設定に追加）`;
      } else {
        iniImportSuccessMsg.value = `${applied}件の設定を適用しました（${skipped}件をスキップ）`;
      }

      iniImportSuccess.value = true;
      setTimeout(() => { iniImportSuccess.value = false; }, 4000);
    }

    return {
      activeTab, settings, openCategories,
      exportData, importData, importError, importSuccess,
      copySuccess, iniOutput,
      iniImportData, iniImportError, iniImportSuccess, iniImportSuccessMsg,
      customSettings, droppedItems,
      schema: SETTINGS_SCHEMA,
      categories: CATEGORIES,
      getCategorySettingsCount,
      toggleCategory, togglePlatform, resetToDefaults,
      copyToClipboard, doExport, doImport, selectAllText, doImportIni
    };
  }
});

app.mount('#app');
