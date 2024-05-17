
const ListOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    { 'author': "Franklin D. Roosevelt" ,
    'quote': "The only limit to our realization of tomorrow is our doubts of today."},
    {'author': 'Albert Einstein', 
      'quote': 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
     },
     {'author': 'Maya Angelou', 
      'quote': 'You will face many defeats in life, but never let yourself be defeated.'
     },
     {'author': 'Nelson Mandela', 
      'quote': 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
     },
     {'author': 'Mark Twain', 
      'quote': 'The secret of getting ahead is getting started.'
     },
     {'author': 'Oscar Wilde', 
      'quote': 'Be yourself; everyone else is already taken.'
     },
     
     {'author': 'Confucius', 
      'quote': 'It does not matter how slowly you go as long as you do not stop.'
     },
     
];


var lastIndex = -1;

function generateQuote() {
    var index;
    do {
        index = Math.floor(Math.random() * ListOfQuotes.length);
    } while (index === lastIndex);
   
    lastIndex = index;
    document.getElementById("quoteOutput").innerText = `\"${ListOfQuotes[index].quote}\"`;
    document.getElementById("authorOutput").innerText = `--${ListOfQuotes[index].author}`;
}
