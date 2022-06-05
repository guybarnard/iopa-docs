function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function MiddlewareCards({posts}: { posts: Array<{ name: string, description: string, link: string, tags: string[]}>}) {
    return (
      <div className="bg-white pt-0 pb-20 px-4 sm:px-6 lg:pt-0 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Use these middleware utilities to quickly expand the features and functionality of your IOPA app.
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.name}>
               
                <a href={post.link} className="no-underline block mt-4">
                  <p className="text-xl font-semibold text-gray-900">{post.name}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div>
                  {(post.tags || []).map(tag => (<a key={tag} href={post.link} className="inline-block no-underline">
                    <span
                      className={classNames(
                        'bg-indigo-100 text-indigo-800',
                        'inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium'
                      )}
                    >
                      {tag}
                    </span>
                  </a>))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }