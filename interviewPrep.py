class Solution:
    def reverseWords(self, s: str) -> str:
        s_regenerate = " ".join(   [ token for token in ( s.split()[::-1] ) if token]   )
        return s_regenerate

    

   