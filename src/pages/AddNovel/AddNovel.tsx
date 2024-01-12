import { MyDatePicker } from "@/components/DatePicker/MyDatePicker";
import { SideBarMyPage } from "@/components/SideBar/SideBarMyPage";
import { ADD_NOVEL, GET_NOVELS } from "@/graphql-client/novel/queries";
import { Language, formatDate } from "@/utils/formatDate";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AddNovel() {
    const { i18n } = useTranslation();
    const [isEditMode, setIsEditMode] = useState(false);
    const [formData, setFormData] = useState({
        novel_uid: '',
        title: '',
        first_novel_publish_at: new Date()
        // cover_picture_url: '', 
    });
    const {loading, error, data, fetchMore } = useQuery(GET_NOVELS, {
        variables: { page: 1, limit: 2 }
    });
    //mutation
    const [addNovel] = useMutation(ADD_NOVEL);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Hàm xử lý khi form được submit
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await addNovel({
              variables: {
                input: {
                  title: formData.title,
                  novel_ulid: formData.novel_uid,
                  first_novel_publish_at: formData.first_novel_publish_at.toISOString()
                },
              },
              refetchQueries: [{ query: GET_NOVELS, variables: { page: 1, limit: 2 }}],
            });
      
            setFormData({
                novel_uid: '',
                title: '',
                first_novel_publish_at: new Date()
            })
            console.log(response.data.createNovel);
          } catch (error) {
            console.error(error);
          }
    };

    // Handle date change from the DatePicker
    const handleDateChange = (date: Date) => {
        setFormData({ ...formData, first_novel_publish_at: date });
    };

    const loadMoreNovels = () => {
        const currentPage = data.novels.novel_pagination.currentPage;
        const totalPages = data.novels.novel_pagination.totalPages;
      
        if (currentPage < totalPages) {
          fetchMore({
            variables: {
              page: currentPage + 1,
              limit: 2
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return {
                ...fetchMoreResult,
                novels: {
                  ...fetchMoreResult.novels,
                  novels: [
                    ...prev.novels.novels,
                    ...fetchMoreResult.novels.novels
                  ]
                }
              };
            }
          });
        }
      };

      const startEdit = (novel) => {
        setFormData({
          novel_uid: novel.novel_uid,
          title: novel.title,
          first_novel_publish_at: new Date(novel.first_novel_publish_at),
        });
        setIsEditMode(true);
      };
    
  return (
    <>
      <SideBarMyPage />
      <div className="content flex-1 ">
        <div className="p-4 max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="form-control w-full">
                {/* Ví dụ với trường title */}
                <label className="label" htmlFor="title">
                    <span className="label-text">Title</span>
                </label>
                <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter title"
                className="input input-bordered"
                value={formData.title}
                onChange={handleChange}
                />

                <label className="label" htmlFor="title">
                    <span className="label-text">novel_ulid</span>
                </label>
                <input
                type="text"
                id="novel_uid"
                name="novel_uid"
                placeholder="Enter title"
                className="input input-bordered"
                value={formData.novel_uid}
                onChange={handleChange}
                />

                <label className="label" htmlFor="title">
                    <span className="label-text">first_novel_publish_at</span>
                </label>
                <MyDatePicker selectedDate={formData.first_novel_publish_at} onDateChange={handleDateChange}/>

                {/* <label className="label" htmlFor="title">
                    <span className="label-text">cover_picture_url</span>
                </label>
                <input type="file" className="input input-bordered w-full max-w-xs" onChange={handleImageChange} />

                {preview && (
                <div className="mt-4">
                    <label className="label">
                    <span className="label-text">Preview</span>
                    </label>
                    <img src={preview} alt="Preview" className="rounded max-w-[200px]" />
                </div>
                )} */}

                <button type="submit" className="btn btn-primary mt-4">
                Create Novel
                </button>
            </form>
            {
                loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error loading novels: {error.message}</div>
                ) : (
                    <div className="mt-[50px] flex gap-2 flex-wrap">
                        {
                            data.novels.novels.map((novel) => (
                                <div key={novel.novel_id} className="card w-[360px] bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{novel.title}</h2>
                                        <p>{formatDate(novel.first_novel_publish_at, i18n.language as Language)}</p>
                                        <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {
            data &&
            data.novels.novel_pagination.currentPage < data.novels.novel_pagination.totalPages &&
            (
                <button onClick={loadMoreNovels}>Load More</button>
            )
            }
        </div>
      </div>
    </>
  )
}
