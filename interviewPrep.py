class Solution:

    def numTeams(self, rating: List[int]) -> int:
        n = len(rating)
        dp_g, dp_l = [0] * n, [0] * n
        res = 0
        for i, r in enumerate(rating):
            for j in range(i):
                if r > rating[j]:
                    dp_g[i] += 1
                    res += dp_g[j]
                elif r < rating[j]:
                    dp_l[i] += 1
                    res += dp_l[j]
        return res
        
    def reverseWords(self, s: str) -> str:
        s_regenerate = " ".join(   [ token for token in ( s.split()[::-1] ) if token]   )
        return s_regenerate

    def getFolderNames(self, names: List[str]) -> List[str]:
        if not names:
            return []
        
        assignedNames = set()
        uniqueNames = []
        
        for name in names:
            if name in assignedNames:
                k = 1
                numberedName = f'{name}({k})'
                
                while numberedName in assignedNames:
                    k += 1
                    numberedName = f'{name}({k})'
                
                assignedNames.add(numberedName)
                uniqueNames.append(numberedName)
            else:
                assignedNames.add(name)
                uniqueNames.append(name)
            
        return uniqueNames


   