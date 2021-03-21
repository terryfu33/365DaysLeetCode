class Solution:
    def reverseWords(self, s: str) -> str:
        s_regenerate = " ".join(   [ token for token in ( s.split()[::-1] ) if token]   )
        return s_regenerate

class Solution:
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

   