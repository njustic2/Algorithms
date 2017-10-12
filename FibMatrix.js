/* 
  Huffman Tree DOT graph.

  DOT Reference :  http://www.graphviz.org/doc/info/lang.html
                   http://en.wikipedia.org/wiki/DOT_language
  Timestamp     :  1507669088 
  Phrase        :  'THE PRIME MINISTER DODGES QUESTIONS ABOUT HOW SHE WOULD VOTE IF THERE WAS ANOTHER EU REFERENDUM.'

  Generated on http://huffman.ooz.ie/
*/

digraph G {
    edge [label=0];
    graph [ranksep=0];
    D [shape=record, label="{{D|4}|0000}"];
    N [shape=record, label="{{N|4}|0001}"];
    H [shape=record, label="{{H|5}|0010}"];
    U [shape=record, label="{{U|5}|0011}"];
    F [shape=record, label="{{F|2}|01000}"];
    V [shape=record, label="{{V|1}|010010}"];
    Q [shape=record, label="{{Q|1}|0100110}"];
    P [shape=record, label="{{P|1}|0100111}"];
    I [shape=record, label="{{I|5}|0101}"];
    FVQPI [label=10];
    A [shape=record, label="{{A|3}|01100}"];
    M [shape=record, label="{{M|3}|01101}"];
    S [shape=record, label="{{S|6}|0111}"];
    R [shape=record, label="{{R|6}|1000}"];
    W [shape=record, label="{{W|3}|10010}"];
    G [shape=record, label="{{G|1}|1001100}"];
    L [shape=record, label="{{L|1}|1001101}"];
    GL [label=2];
    DOT [shape=record, label="{{DOT|1}|1001110}"];
    B [shape=record, label="{{B|1}|1001111}"];
    DOTB [label=2];
    O [shape=record, label="{{O|7}|1010}"];
    T [shape=record, label="{{T|7}|1011}"];
    E [shape=record, label="{{E|14}|110}"];
    SPACE [shape=record, label="{{SPACE|15}|111}"];
    96 -> 40 -> 18 -> 8 -> D;
    10 -> H;
    22 -> FVQPI -> 5 -> F;
    3 -> V;
    2 -> Q;
    12 -> 6 -> A;
    56 -> 27 -> 13 -> R;
    7 -> W;
    4 -> GL -> G;
    DOTB -> DOT;
    14 -> O;
    29 -> E;8 -> N [label=1];
    18 -> 10 -> U [label=1];
    5 -> 3 -> 2 -> P [label=1];
    FVQPI -> I [label=1];
    6 -> M [label=1];
    40 -> 22 -> 12 -> S [label=1];
    GL -> L [label=1];
    13 -> 7 -> 4 -> DOTB -> B [label=1];
    27 -> 14 -> T [label=1];
    96 -> 56 -> 29 -> SPACE [label=1];
}