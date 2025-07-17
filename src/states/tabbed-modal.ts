import { ref } from 'vue';

export interface ITab {
  is: "Search" | "Info" | "AnalyzeResult";
  title: string;
  q: string;
}

export const modalTabs = ref<ITab[]>([]);

export function newTab(t: ITab) {
  modalTabs.value = [...modalTabs.value, t];
}

export interface AnalyzeItem {
  /** token */
  t: string;
  /** [token] details
   *
   * 0. word type. Consider excluding "助詞","助動詞","フィラー". If "UNK", array length is 1.
   *    (UNK,フィラー,副詞,助動詞,助詞,動詞,名詞,記号)
   * 1. (*,サ変接続,一般,代名詞,係助詞,副助詞／並立助詞／終助詞,副詞化,副詞可能,助詞類接続,句点,形容動詞語幹,接尾,接続助詞,格助詞,自立,読点,連体化,非自立)
   * 2. (*,一般,助動詞語幹,引用)
   * 3. (*)
   * 4. (*,カ変・来ル,サ変・スル,一段,不変化型,五段・マ行,五段・ラ行,五段・ワ行促音便,特殊・タ,特殊・ダ,特殊・ナイ)
   * 5. (*,体言接続,基本形,未然ウ接続,未然形,連用タ接続,連用形)
   * 6. dictionary form
   * 7. reading of [token] in Katakana
   * 8. reading of [token] with ー
   */
  r: string[];
}

export const analyzeItems = ref<AnalyzeItem[]>([]);
