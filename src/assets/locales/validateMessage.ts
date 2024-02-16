export const CME00001 = "半角数字以外の文字が入力されています。";

/** max length for number */
export const CME00002 = (maxLength: number) =>
  `適正ではない桁数の数値が入力されています。最大桁数:${maxLength}桁。`;

export const CME00003 = "必須項目が未入力です。";

export const CME00004 =
  "不正なメールアドレスが入力されています。メールアドレスに使用できない文字を使用していないか、または誤った形式で入力していないかを確認してください。";

export const CME00005 = "半角数字およびハイフン以外の文字が入力されています。";

/** max length for character */
export const CME00006 = (maxLength: number) =>
  `適正ではない文字数の文字が入力されています。最大文字数:${maxLength}文字。`;

export const CME00007 = "半角英数字以外の文字が入力されています。";

export const CME00008 = "開始日が終了日より未来の日付となっています。";

export const CME00009 = "全角以外の文字が入力されています。";

export const CME000010 = "無効な形式のファイルが含まれています。";

export const CME000011 = (total: number) =>
  `一度にアップロードできるファイル数は${total}個までです。`;

export const CME000012 = (digit: number) =>
  `${digit}桁の半角数値で入力してください。`;

export const CME000013 = (name: string) =>
  `${name}は、いずれかの項目を１つ以上、選択してください。`;

export const CME000014 = "合計5MB以上アップロードできません。";

export const CME000014_2 = "5MB以上アップロードできません。";

export const CME000015 = (name: string, value: number) =>
  `${name}は${value}以下でなければなりません。`;

export const CME00016 = (name: string, min: number) =>
  `${name}は${min}以上でなければなりません。`;

export const CME00017 = (valueA: string, labelA: string, labelB: string) =>
  `${labelA}に${valueA}を選んでいる場合、${labelB}の入力は必須です。`;

export const CME00018 = "FAX以外の文字が入力されています。";

export const CME00019 = "二つのハイフンを入力してください。";

export const CME00020 = (name: string) =>
  `${name}は10桁または11桁の半角数字にてご入力ください。`;

export const CME00023 = "終了日が開始日と同じ日付となっています。";

export const CME00024 = "このファイルは0バイトのためアップロードされません。";

export const CME00025 =
  "ファイル名が長すぎます。拡張子を含めて255文字以下にしてください。";

export const CME00027 = (total: number) =>
  `設定できる送信先は最大${total}件です。`;

export const CME00028 = "最初の番号が0以外となっています。";

export const CME00034 = (label: string) =>
  `相手先種類を選択している場合、${label}が必須です。`;

export const CME00042 = "カナに使用できない文字が使用されています。";

export const CME00046 = (name: string) => `${name}します。よろしいですか。`;

export const CME00048 = (integerPart: string, decimalPart: string) =>
  `適正ではない桁数の数値が入力されています。整数部 ${integerPart}桁 少数部 ${decimalPart}桁。`;

export const SHE00001 = "稼働日数が1年（365日）を超えています。";
export const SHE00002 = "単位がその他の場合、必須です。";
export const SHE00003 = "t／日の処理能力をt／時の処理能力が超えています。";
export const SHE00004 = "その他の場合、必須です。";
export const SHE00005 = "開始時間が終了時間より未来の時間となっています。";
export const SHE00006 = "終了時間が開始時間と同じ時間となっています。";
export const SHE00007 =
  "業の種類番号および自由番号は2桁の数値を入力してください。";
export const SHE00008 = "業許可業者の固有番号は6桁の数値を入力してください。";

export const HDE00001 = (total: number) =>
  `土量情報は${total}件以上登録することができません。`;
export const HDE00002 = "入力された認証コードが正しくありません。";
export const HDE00003 = "不正なURLが入力されました。再ログインしてください。";
export const HDE00004 = (label: string) =>
  `実績処理を行う場合、${label}が必須です。`;
export const HDE00005 = "土工期は工事の開始と終了の間でなければなりません。";
export const HDE00007 =
  "土工期が終了しています。最終的な搬出先（相手先種類）を登録してください。";
export const HDE00008 =
  "土量規模右側の値は左側の値以上となるように入力してください。";
export const HDE00009 =
  "土工期が終了しています。工事間利用の有無を登録してください。";

export const TEL_FAX_INVALID = (name: string) =>
  `正しい${name}を入力してください。`;

export const IS_VALID_URL = "無効なURLです。";

export const KNW00001 = "選択している細分類は廃止となりました。";
export const KNW00002 = "紐づく発注機関が廃止となりました。";
export const KNW00003 = "発注機関と紐づいていません。";
export const KNW00004 = "細分類が複数の発注機関と紐づいています。";
export const KNW00005 = (note: string = "") =>
  `選択している発注機関は廃止となりました。${note}`;
export const MOE00001 = "申込済みです。";
export const MOE00002 = "パスワードが一致しません。";
export const MOE00003 =
  "パスワードにユーザーID、メールアドレスと同じ値は利用できません。";
export const MOE00004 =
  "パスワードで使用できない文字が入力されています。\n" +
  "パスワードで使用できるのは半角英数字および.!_/`()[]+-=$#&@~　となります。";
export const MOE00005 = "パスワードは8桁以上13桁以下で設定してください。";
export const MOE00006 =
  "登録されているメールアドレスと同じメールアドレスを登録しようとしています。";
export const KNE00012 = (text: string) =>
  `承認状況が ${text} 以外に変更されています。`;
export const KNI00001 =
  "本申込を承認した場合、代行ユーザーを追加で作成します。";

export const APPROVAL_SUCCESS_MESSAGE = (buttonName: string) =>
  `${buttonName}しました。`;

export const CMW00003 = "ユーザーは存在しません。";
export const CMW00007 = "ユーザーのユーザー区分が受注者ではありません。";

export const FKW00013 =
  "データが変更されています。再度、データチェックを行ってください。";
