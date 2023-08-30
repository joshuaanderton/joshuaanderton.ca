
@php echo '<?xml version="1.0" encoding="UTF-8" ?>' @endphp
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:podcast="https://podcastindex.org/namespace/1.0">
  <channel>
    <atom:link rel="self" type="application/atom+xml" href="https://feeds.polarize.tech/tres-commas" title="MP3 Audio"/>
    <atom:link rel="hub" href="https://pubsubhubbub.appspot.com/"/>
    <podcast:podping usesPodping="true"/>
    <title>{{ $title }}</title>
    <generator>Polarize Technologies (https://polarize.tech)</generator>
    <itunes:new-feed-url>https://feeds.polarize.tech/{{ $subdomain }}</itunes:new-feed-url>
    <description>{{ $description }}</description>
    <copyright>© {{ date('Y') }} {{ $title }}</copyright>
    <podcast:guid>{{ $guid }}</podcast:guid>
    <podcast:locked owner="joshua@polarize.tech">no</podcast:locked>
    <language>en</language>
    <pubDate>Wed, 30 Aug 2023 10:35:34 +0000</pubDate>
    <lastBuildDate>Wed, 30 Aug 2023 19:55:49 +0000</lastBuildDate>
    <link>https://polarize.tech</link>
    <image>
      <url>{{ $image }}</url>
      <title>Tres Commas</title>
      <link>https://polarize.tech</link>
    </image>
    <itunes:category text="Business">
      <itunes:category text="Entrepreneurship"/>
    </itunes:category>
    <itunes:type>episodic</itunes:type>
    <itunes:author>{{ $author }}</itunes:author>
    <itunes:image href="{{ $image }}"/>
    <itunes:summary>{{ $description }}</itunes:summary>
    <itunes:subtitle>{{ $description }}.</itunes:subtitle>
    <itunes:keywords>software,technology,business</itunes:keywords>
    <itunes:owner>
      <itunes:name>{{ $owner_name }}</itunes:name>
      <itunes:email>{{ $owner_email }}</itunes:email>
    </itunes:owner>
    <itunes:complete>No</itunes:complete>
    <itunes:explicit>No</itunes:explicit>
    @foreach ($episodes as $episode)
    <item>
      <title>{{ $episode['title'] }}</title>
      <itunes:episode>{{ $episode['number'] }}</itunes:episode>
      <podcast:episode>{{ $episode['number'] }}</podcast:episode>
      <itunes:title>{{ $episode['title'] }}</itunes:title>
      <itunes:episodeType>full</itunes:episodeType>
      <guid isPermaLink="false">95d55285-a3b1-410d-a9c0-fea8b7b736f7</guid>
      <link>https://polarize.tech</link>
      <description>
        <![CDATA[{!! $episode['description'] !!}]]>
      </description>
      <content:encoded>
        <![CDATA[{!! $episode['description'] !!}]]>
      </content:encoded>
      <pubDate>Sat, 01 Feb 2020 08:00:00 +0000</pubDate>
      <author>{{ $author }}</author>
      <enclosure url="{{ $episode['audio'] }}" length="22750965" type="audio/mpeg"/>
      <itunes:author>{{ $author }}</itunes:author>
      <itunes:image href="{{ $episode['image'] }}"/>
      <itunes:duration>945</itunes:duration>
      <itunes:keywords>software,technology,business</itunes:keywords>
      <itunes:explicit>No</itunes:explicit>
    </item>
    @endforeach
  </channel>
</rss>
